process.env.NODE_ENV = 'test';

var chai = require('chai');
var chai_http = require('chai-http');
var jsdom = require('jsdom');
var app = require('../..');

var should = chai.should();
chai.use(chai_http);

global.chai = chai;
global.should = should;
global.app = app;
global.jsdom = jsdom;
