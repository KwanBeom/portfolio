export type AnimationHookProps<T> = {
  ref: React.MutableRefObject<T | null>;
  mode: 'trigger' | 'percentage';
};
