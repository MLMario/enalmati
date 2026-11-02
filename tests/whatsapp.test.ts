import { test } from 'node:test';
import assert from 'node:assert/strict';
import { WHATSAPP_MESSAGES, waLink, type WhatsAppMessageKey } from '../src/data/whatsapp.ts';

const keys = Object.keys(WHATSAPP_MESSAGES) as WhatsAppMessageKey[];

test('there are 8 messages, one per CTA in research/02 §B2', () => {
  assert.equal(keys.length, 8);
});

test('every link targets the En Almati number and round-trips its message', () => {
  for (const key of keys) {
    const url = new URL(waLink(key));
    assert.equal(url.origin + url.pathname, 'https://wa.me/51996134087');
    assert.equal(url.searchParams.get('text'), WHATSAPP_MESSAGES[key]);
  }
});

test('accents and punctuation are percent-encoded', () => {
  assert.match(waLink('general'), /m%C3%A1s/);
  assert.doesNotMatch(waLink('general'), /[ ,á]/);
});
