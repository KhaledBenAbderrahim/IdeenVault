import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica'
  },
  title: {
    fontSize: 24,
    marginBottom: 10
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20
  },
  section: {
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#065f46'
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5
  },
  label: {
    width: '40%',
    fontSize: 12,
    color: '#666'
  },
  value: {
    width: '60%',
    fontSize: 12
  }
});

export const IdeaPDF = ({ idea }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>{idea.title}</Text>
      <Text style={styles.subtitle}>{idea.shortTitle}</Text>

      {/* Grundinformationen */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Grundinformationen</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Serviceidee:</Text>
          <Text style={styles.value}>{idea.title}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Kürzel:</Text>
          <Text style={styles.value}>{idea.shortTitle}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Erläuterung:</Text>
          <Text style={styles.value}>{idea.description}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Typ:</Text>
          <Text style={styles.value}>{idea.type || 'Nicht spezifiziert'}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Kunde:</Text>
          <Text style={styles.value}>{idea.customer || 'Nicht spezifiziert'}</Text>
        </View>
      </View>

      {/* Status & Phase */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Status & Phase</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Status:</Text>
          <Text style={styles.value}>{idea.status}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Phase:</Text>
          <Text style={styles.value}>{idea.phase}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Priorität:</Text>
          <Text style={styles.value}>{idea.priority}</Text>
        </View>
      </View>

      {/* Bewertung */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bewertung</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Originalität:</Text>
          <Text style={styles.value}>{idea.originality || 'Nicht bewertet'}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Zielgruppe:</Text>
          <Text style={styles.value}>{idea.targetGroupSize || 'Nicht definiert'}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>MVP Reifegrad:</Text>
          <Text style={styles.value}>{idea.mvpMaturity || '0%'}</Text>
        </View>
      </View>
    </Page>
  </Document>
);