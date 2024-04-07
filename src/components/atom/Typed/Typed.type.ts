export interface TypedOptions {
  render: (string: string) => JSX.Element;
  typeSpeed: number;
  strings: string[];
  animate?: boolean;
  animateDelay?: number;
  animateDuration?: number;
  viewCursor?: boolean;
  onSuccess?: () => void;
}
