import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Agent } from '../../domain/models/agent_model';
import { AppTypography } from '../../../../product/typography/typography';
import { AppImage } from '../../../../product/components/app_image';
import { agentListItemStyles } from '../styles/agent_list_item_style';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
  agent: Agent;
  onPress?: () => void;
};

export const AgentListItemView: React.FC<Props> = ({ agent, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={agentListItemStyles.card}>
      <AppImage
        source={agent.displayIcon ? { uri: agent.displayIcon } : undefined}
        style={agentListItemStyles.image}
        resizeMode="contain"
      />
      <View style={agentListItemStyles.cardRow}>
        <View style={agentListItemStyles.textColum}>
          <Text style={AppTypography.titleSmall}>{agent.displayName}</Text>
          <Text style={AppTypography.labelMedium}>
            {agent.role?.displayName ?? 'Not Found Role'}
          </Text>
        </View>
        <Ionicons name="arrow-forward" size={24} color="#fff" />
      </View>

    </TouchableOpacity>
  );
};

