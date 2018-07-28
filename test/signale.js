'use strict'

const test = require('ava')
const { Signale } = require('signale')

const signale = require('../src/signale')

test('should be a Signale instance', (t) => {

	t.true(signale instanceof Signale)

})