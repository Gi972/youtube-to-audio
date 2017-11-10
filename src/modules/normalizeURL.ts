import {
  compose,
  head,
  identity,
  split,
} from 'rambdax'

export function normalizeURL(url: string): string {

  return compose(
    head,
    identity,
    split('&'),
  )(url)
}
