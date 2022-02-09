import { NativeStackHeaderProps } from '@react-navigation/native-stack';

export type RouteParamsSlug = {
  route: {
    params: {
      slug: string;
    };
  };
};

export type WorkoutPreviewProps = NativeStackHeaderProps & RouteParamsSlug;
