import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fontFamilies, spacings } from '@/constants/design-system';
import { ARCHITECTURE_DATA, NEXT_STEPS, SOC_STRUCTURE, TECH_STACK, THEME_MODES } from './sample-screeen.constants';
import { useSampleScreen } from './sample-screeen.hooks';
import { ThemeMode } from './sample-screeen.types';

export function SampleScreen() {
  const { theme, styles, colorSchemePref, setTheme } = useSampleScreen();

  const ThemeButton = ({
    mode,
    label,
    icon,
  }: {
    mode: ThemeMode;
    label: string;
    icon: keyof typeof Ionicons.glyphMap;
  }) => {
    const isActive = colorSchemePref === mode;
    return (
      <TouchableOpacity
        onPress={() => setTheme(mode)}
        activeOpacity={0.7}
        style={[
          styles.themeButton,
          {
            backgroundColor: isActive ? theme.primary : theme.secondary,
            borderColor: isActive ? theme.primary : theme.border,
          },
        ]}>
        <Ionicons name={icon} size={18} color={isActive ? '#1c1917' : theme.secondaryForeground} />
        <Text
          style={[
            styles.themeButtonText,
            {
              fontFamily: isActive ? fontFamilies.primarySemiBold : fontFamilies.primaryMedium,
              color: isActive ? '#1c1917' : theme.secondaryForeground,
            },
          ]}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.title}>
            Welcome to <Text style={{ color: theme.primary }}>MyExpoStarter</Text>
          </Text>
          <Text style={styles.subtitle}>A modern, feature-based architecture for React Native projects.</Text>
        </View>

        {/* Theme Switcher */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Appearance</Text>
          <View style={styles.themeSwitcher}>
            {THEME_MODES.map((mode) => (
              <ThemeButton key={mode.mode} {...mode} />
            ))}
          </View>
        </View>

        {/* Project Architecture */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Project Structure</Text>
          <View style={styles.card}>
            {ARCHITECTURE_DATA.map((item, index) => (
              <View
                key={item.path}
                style={[
                  styles.architectureRow,
                  {
                    borderBottomColor: theme.border,
                    borderBottomWidth: index === ARCHITECTURE_DATA.length - 1 ? 0 : 1,
                  },
                ]}>
                <Text style={{ fontFamily: fontFamilies.primarySemiBold, color: theme.primary, fontSize: 13 }}>
                  {item.path}
                </Text>
                <Text style={{ fontFamily: fontFamilies.primaryRegular, color: theme.mutedForeground, fontSize: 13 }}>
                  {item.desc}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* SOC Structure */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Separation of Concerns</Text>
          <View style={styles.card}>
            {SOC_STRUCTURE.map((item, index) => (
              <View
                key={item.suffix}
                style={[
                  styles.architectureRow,
                  {
                    borderBottomColor: theme.border,
                    borderBottomWidth: index === SOC_STRUCTURE.length - 1 ? 0 : 1,
                  },
                ]}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacings.xs }}>
                  <Text style={{ fontSize: 16 }}>{item.icon}</Text>
                  <Text style={{ fontFamily: fontFamilies.primarySemiBold, color: theme.primary, fontSize: 13 }}>
                    {item.suffix}
                  </Text>
                </View>
                <Text style={{ fontFamily: fontFamilies.primaryRegular, color: theme.mutedForeground, fontSize: 13 }}>
                  {item.role}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Tech Stack */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tech Stack</Text>
          <View style={styles.techStackContainer}>
            {TECH_STACK.map((tech) => (
              <View key={tech} style={styles.badge}>
                <Text style={styles.badgeText}>{tech}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Next Steps */}
        <View>
          <Text style={styles.sectionTitle}>Next Steps</Text>
          <View>
            {NEXT_STEPS.map((step) => (
              <View key={step.title} style={styles.nextStepItem}>
                <Text style={{ fontSize: 20 }}>{step.icon}</Text>
                <View>
                  <Text style={{ fontFamily: fontFamilies.primaryBold, color: theme.cardForeground }}>
                    {step.title}
                  </Text>
                  <Text style={{ fontFamily: fontFamilies.primaryRegular, color: theme.mutedForeground, fontSize: 13 }}>
                    {step.desc}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
