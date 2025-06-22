
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Agent } from '../../domain/models/agent_model';
import { AppImage } from '../../../../product/components/app_image';
import { agentDetailPageBodyStyles } from '../styles/agent_detail_page_body_styles';
import { AppTypography } from '../../../../product/typography/typography';

type Props = {
  agent: Agent;
};

export const AgentDetailView: React.FC<Props> = ({ agent }) => (
  <ScrollView contentContainerStyle={agentDetailPageBodyStyles.content}>
    {agent.fullPortrait && (
      <AppImage
        source={{ uri: agent.fullPortrait }}
        style={agentDetailPageBodyStyles.portrait}
        resizeMode="contain"
      />
    )}

    <View style={agentDetailPageBodyStyles.descriptionCard}>
      <Text style={[AppTypography.titleSmall, { color: '#FF4655', fontWeight: "bold" }]}>Description:</Text>
      <Text style={AppTypography.bodySmall}>{agent.description}</Text>
    </View>


    <View style={agentDetailPageBodyStyles.descriptionCard}>
      {agent.role && (
        <>
          <Text style={[AppTypography.titleSmall, { color: '#FF4655', fontWeight: "bold" }]}>Role:</Text>
          <Text style={AppTypography.bodySmall}>{agent.role.displayName}</Text>
        </>
      )}
    </View>


    <View style={agentDetailPageBodyStyles.descriptionCard}>
      <Text style={[AppTypography.titleSmall, { color: '#FF4655', fontWeight: "bold" }]}>Skills:</Text>
      {agent.abilities.map((ability, index) => (
        <View key={index} style={{ marginBottom: 12 }}>
          <Text style={[AppTypography.bodySmall, { fontWeight: 'bold' }]}>{ability.displayName}</Text>
          <Text style={AppTypography.bodySmall}>{ability.description}</Text>
        </View>
      ))}
    </View>

  </ScrollView>
);

