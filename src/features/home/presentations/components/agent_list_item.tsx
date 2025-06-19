import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Agent } from '../../domain/models/agent_model';
import { AppTypography } from '../../../../product/typography/typography';
import { AppImage } from '../../../../product/components/app_image';

type Props = {
  agent: Agent;
};

export const AgentListItemView: React.FC<Props> = ({ agent }) => {
  return (
    <View style={styles.card}>
      <AppImage
        source={agent.displayIcon ? { uri: agent.displayIcon } : undefined}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.textWrapper}>
        <Text style={AppTypography.titleSmall}>{agent.displayName}</Text>
        <Text style={AppTypography.labelMedium}>
          {agent.role?.displayName ?? 'Rol Yok'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#2C2C2C',
    padding: 12,
    borderRadius: 8,
  },
  image: {
    width: 48,
    height: 48,
    marginRight: 12,
    borderRadius: 4,
  },
  textWrapper: {
    flex: 1,
  },
});
