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

	for (prop in data) {
		if (data.hasOwnProperty(prop)) {
			// Add Content-Type.
			if (prop === 'contentType') {
				entity.contentType(data[prop]);
			}

			// Add Content-Transfer-Encoding.
			else if (prop === 'contentTransferEncoding') {
				entity.contentTransferEncoding(data[prop]);
			}

			// Add body.
			else if (prop === 'body') {
				entity.body = data[prop];
			}

			// Add status
			else if (prop === 'status') {
				entity._status = data[prop]
			}

			else entity[prop] = data[prop]
		}
	}

	return entity;
}
