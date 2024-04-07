export type ExperienceProps = {
  name: string;
  during: {
    start: string;
    end: string;
  };
  detail?: string;
  learning?: string[];
};
