// CLIENT SUCCESS
export type ClientSuccess<T> = {
  _tag: 'ClientSuccess';
  data: T;
};

export const clientSuccess = <R>(result: R): ClientSuccess<R> => ({
  _tag: 'ClientSuccess',
  data: result
});

export type ResponseEither<E, A> = ClientSuccess<E> | ClientError<A>;

export const isClientSuccess = <E, A>(ma: ResponseEither<E, A>): ma is ClientSuccess<E> => ma._tag === 'ClientSuccess';
export const isClientError = <E, A>(ma: ResponseEither<E, A>): ma is ClientError<A> => ma._tag === 'ClientError';

// CLIENT ERROR
export type ClientError<T> = {
  _tag: 'ClientError';
  error: T;
};

export const clientError = <R>(error: R): ClientError<R> => ({
  _tag: 'ClientError',
  error
});
