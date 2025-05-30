#!/usr/bin/env node

/*
 * This is a simple script to update the versions in Git for Windows'
 * home page.
 */

var fs = require('fs');

var die = (err) => {
	process.stderr.write(err + '\n');
	process.exit(1);
};

var updateVersion = (version, tag, timestamp, url) => {
	fs.readFile('hugo.yml', 'utf8', (err, data) => {
		if (err)
			die(err);
		data = data
			.replace(/(\n  version: ).*/, `$1${version}`)
			.replace(/(\n  tag_name: ).*/, `$1${tag}`)
			.replace(/(\n  publish_date: ).*/, `$1"${timestamp}"`)
			.replace(/(\n  url: ).*/, `$1"${url}"`);
		fs.writeFileSync('hugo.yml', data);
	});
};

var autoUpdate = () => {
	Array.prototype.lastElement = () => {
		return this[this.length - 1];
	}

	Array.prototype.filterRegex = (regex) => {
		return this.map((value) => {
			var match = value.match(regex);
			if (!match)
				return undefined;
			return match.lastElement();
		}).filter((value) => {
			return value !== undefined;
		});
	};

	Array.prototype.findFirst = (regex) => {
		var matches = this.filterRegex(regex);
		return matches && matches[0];
	};

	var determineVersion = (body) => {
		var release = JSON.parse(body),
			versionRegex = /^v(\d+\.\d+\.\d+(\.\d+)?)\.windows\.(\d+)/,
			timeRegex = /^(\d+)-(\d+)-(\d+)T(\d+):(\d+):(\d+)Z$/,
			version = false,
			match, latest, url;

		if (match = release.tag_name.match(versionRegex)) {
			version = match[1];

			if (parseInt(match[3]) > 1) {
				version += '.' + match[3];
			}

			match = release.published_at.match(timeRegex);
			latest = new Date(match[1], match[2] - 1, match[3],
				match[4], match[5], match[6], 0).toUTCString();
			latest = latest.replace(/GMT$/, 'UTC');
			url = release.html_url;
		}

		process.stderr.write('Auto-detected version ' + version
			+ ' (' + latest + ')\n');
		return [ version, release.tag_name, latest, url ];
	};

	var https = require('https');
	https.body = '';
	https.get({
		'hostname': 'api.github.com',
		'path': '/repos/git-for-windows/git/releases/latest',
		'headers': {
			'User-Agent': 'Git for Windows version updater'
		}
	}, (res) => {
		if (res.statusCode != 200)
			die(res);
		res.on('data', (data) => {
			https.body += data.toString();
		});
		res.on('end', () => {
			var result = determineVersion(https.body);
			updateVersion(result[0], result[1], result[2], result[3]);
		});
	});
};

if (process.argv.length == 3 && '--auto' == process.argv[2])
	autoUpdate();
else if (process.argv.length == 6)
	updateVersion(process.argv[2], process.argv[3], process.argv[4], process.argv[5]);
else
	die('Usage: node ' + process.argv[1]
		+ ' <version> <tag> <timestamp> <url>\n');
