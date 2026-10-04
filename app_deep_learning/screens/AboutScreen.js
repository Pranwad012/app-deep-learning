import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { aboutStyles as styles } from '../styles/aboutStyles';

export default function AboutScreen({ onNavigate }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Ionicons name="information-circle-outline" size={70} color="#4F46E5" />
      <Text style={styles.title}>เกี่ยวกับระบบ</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>คุณลักษณะโมเดล</Text>
        <Text style={styles.cardText}>• Architecture: MobileNetV2</Text>
        <Text style={styles.cardText}>• Input Resolution: 224x224x3</Text>
        <Text style={styles.cardText}>• Framework: Keras / TensorFlow 2.4.0</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>การใช้งานบนเว็บ</Text>
        <Text style={styles.cardText}>
          รองรับการใช้งานผ่านเว็บด้วย React Native for Web ร่วมกับ Expo Framework
        </Text>
      </View>

      <TouchableOpacity style={styles.backBtn} onPress={() => onNavigate('Home')}>
        <Ionicons name="arrow-back-outline" size={18} color="#6B7280" />
        <Text style={styles.backBtnText}>กลับหน้าหลัก</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}