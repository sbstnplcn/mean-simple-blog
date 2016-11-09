/*

  Ecrire la fonction vowelConsonantCount qui retourne un objet
  indiquant le nombre de voyelle et de consonne qui compose le mot passé
  en paramètre

*/

var assert = require('assert');
var vowelConsonantCount = require('../vowelConsonantCount.js');

describe('Count vowel and consonant', function () {

    it('should be loaded', function () {
        assert.equal(true, true);
    });

    it('count ab', function () {
        assert.deepEqual(vowelConsonantCount('ab'), {v:1,c:1});
    });

    it('count Abc', function () {
        assert.deepEqual(vowelConsonantCount('Abc'), {v:1,c:2});
    });

    it('count hello', function () {
        assert.deepEqual(vowelConsonantCount('hello'), {v:2,c:3});
    });

    it('count anticonstitutionnellement', function() {
      assert.deepEqual(vowelConsonantCount('anticonstitutionnellement'), {v:10, c: 15});
    });

    it('count empty', function () {
        assert.deepEqual(vowelConsonantCount(''), {v:0,c:0});
    });

    it('count null', function () {
        assert.deepEqual(vowelConsonantCount(), {v:0,c:0});
    });

    it('count number', function () {
        assert.deepEqual(vowelConsonantCount(3), {v:0,c:0});
    });

});
