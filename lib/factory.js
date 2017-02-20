/**
 * Expose the factory function.
 */
module.exports = factory;

var
	/**
	 * Dependencies.
	 */
	debug = require('debug')('mimemessage:factory'),
	debugerror = require('debug')('mimemessage:ERROR:factory'),
	Entity = require('./Entity');

debugerror.log = console.warn.bind(console);


function factory(data) {
	debug('factory() | [data:%o]', data);
	var entity = new Entity();

	data = data || {};

	// Add body.
	if (data.body) {
		entity.body = data.body;
	}

	// Add status
	if (data.status) {
		entity._status = data.status
	}

	if (data.headers) {
		for (header in data.headers) {
			// Add Content-Type.
			if (header === 'contentType') {
				entity.contentType(data.headers[header]);
			}

			// Add Content-Transfer-Encoding.
			else if (header === 'contentTransferEncoding') {
				entity.contentTransferEncoding(data.headers[header]);
			}

			else entity.header(header, data.headers[header])
		}

	}

	return entity;
}
