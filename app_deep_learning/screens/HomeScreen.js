import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { homeStyles as styles } from '../styles/homeStyles';

export default function HomeScreen({ onNavigate }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Ionicons name="hardware-chip-outline" size={80} color="#4F46E5" />
      <Text style={styles.title}>ระบบวิเคราะห์และทำนายภาพ</Text>
      <Text style={styles.subtitle}>
        แอปพลิเคชันสำหรับประมวลผลรูปภาพด้วย Deep Learning (MobileNetV2)
      </Text>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={[styles.button, styles.primaryButton]}
          onPress={() => onNavigate('Predict')}
        >
          <Ionicons name="scan-outline" size={24} color="#FFF" style={styles.icon} />
          <Text style={styles.buttonText}>เริ่มต้นใช้งาน (ทำนายภาพ)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={() => onNavigate('About')}
        >
          <Ionicons name="information-circle-outline" size={24} color="#4F46E5" style={styles.icon} />
          <Text style={[styles.buttonText, { color: '#4F46E5' }]}>เกี่ยวกับแอปพลิเคชัน</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}