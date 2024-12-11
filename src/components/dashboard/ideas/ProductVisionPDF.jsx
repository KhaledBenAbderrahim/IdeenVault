import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica'
  },
  header: {
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    color: '#065f46'
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#374151'
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
  content: {
    fontSize: 12,
    lineHeight: 1.6,
    color: '#374151',
    whiteSpace: 'pre-line'
  },
  metadata: {
    marginTop: 40,
    paddingTop: 20,
    borderTop: 1,
    borderColor: '#d1d5db',
    fontSize: 10,
    color: '#6b7280'
  }
});

export const ProductVisionPDF = ({ vision, idea }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>{idea.title}</Text>
        <Text style={styles.subtitle}>KI-generierte Produktvision für {idea.shortTitle}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Produktvision</Text>
        <Text style={styles.content}>{vision.vision}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>USP (Alleinstellungsmerkmale)</Text>
        <Text style={styles.content}>{vision.usp}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Adressierte Probleme</Text>
        <Text style={styles.content}>{vision.problemsAddressed}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Kernfunktionen</Text>
        <Text style={styles.content}>{vision.keyFeatures}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Zielgruppe</Text>
        <Text style={styles.content}>{vision.targetAudience}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technische Anforderungen</Text>
        <Text style={styles.content}>{vision.technicalRequirements}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Geschäftsmodell</Text>
        <Text style={styles.content}>{vision.businessModel}</Text>
      </View>

      <View style={styles.metadata}>
        <Text>Generiert am: {new Date().toLocaleDateString('de-DE')}</Text>
        <Text>Ideenphase: {idea.phase}</Text>
        <Text>Priorität: {idea.priority}</Text>
        <Text>MVP-Reifegrad: {idea.mvpMaturity}</Text>
      </View>
    </Page>
  </Document>
);