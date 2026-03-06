import { useMemo } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useLoadingProvider } from './loading-provider.hooks';
import { createStyles } from './loading-provider.styles';

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const { fontsLoaded, theme } = useLoadingProvider();
  const styles = useMemo(() => createStyles(theme), [theme]);

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={theme.primary} />
      </View>
    );
  }

  return <>{children}</>;
}
