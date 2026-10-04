import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ScrollView,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { predictStyles as styles } from '../styles/predictStyles';

export default function PredictScreen({ onNavigate }) {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('คำเตือน', 'กรุณาอนุญาตการเข้าถึงคลังภาพ');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setResult(null);
    }
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('คำเตือน', 'กรุณาอนุญาตการเข้าถึงกล้องถ่ายรูป');
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setResult(null);
    }
  };

  const handlePredict = async () => {
    if (!image) return;

    setLoading(true);

    try {
      let formData = new FormData();
      formData.append('file', {
        uri: image,
        name: 'photo.jpg',
        type: 'image/jpeg',
      });

      // หมายเหตุ: เมื่อเชื่อมต่อกับ Backend จริง สามารถดึงค่าจาก API มาใส่ได้
      // const response = await fetch('https://your-api-domain.com/predict', { method: 'POST', body: formData });
      // const data = await response.json();

      // จำลองผลการทำนายประเภทรถ (รถกระบะ / รถเก๋ง)
      setTimeout(() => {
        setResult({
          carType: 'รถกระบะ', // หรือเปลี่ยนเป็น 'รถเก๋ง' ตามผลประมวลผล
          confidence: '96.50%',
        });
        setLoading(false);
      }, 1500);
    } catch (error) {
      Alert.alert('เกิดข้อผิดพลาด', 'ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้');
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>ทำนายผลรูปภาพ</Text>
      <Text style={styles.subtitle}>เลือกหรือถ่ายรูปภาพขนาด 224x224 พิกเซล</Text>

      <View style={styles.imageBox}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <View style={styles.placeholder}>
            <Ionicons name="image-outline" size={48} color="#9CA3AF" />
            <Text style={styles.placeholderText}>ยังไม่ได้เลือกรูปภาพ</Text>
          </View>
        )}
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.btn, styles.btnSecondary]} onPress={pickImage}>
          <Ionicons name="images-outline" size={18} color="#4F46E5" />
          <Text style={styles.btnSecondaryText}>คลังภาพ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn, styles.btnSecondary]} onPress={takePhoto}>
          <Ionicons name="camera-outline" size={18} color="#4F46E5" />
          <Text style={styles.btnSecondaryText}>ถ่ายภาพ</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.btn, styles.btnPrimary, (!image || loading) && styles.disabledBtn]}
        onPress={handlePredict}
        disabled={!image || loading}
      >
        {loading ? (
          <ActivityIndicator color="#FFF" />
        ) : (
          <>
            <Ionicons name="analytics-outline" size={20} color="#FFF" />
            <Text style={styles.btnPrimaryText}>ส่งภาพไปประมวลผล</Text>
          </>
        )}
      </TouchableOpacity>

      {/* ส่วนแสดงผลลัพธ์ที่ปรับปรุงใหม่ */}
      {result && (
        <View style={styles.resultCard}>
          <Text style={styles.resultHeader}>ผลการวิเคราะห์:</Text>
          <Text style={styles.resultDetail}>
            ประเภทรถ: <Text style={styles.boldText}>{result.carType}</Text>
          </Text>
          <Text style={styles.resultDetail}>
            ความแม่นยำเอนเอียงไปทาง {result.carType}: <Text style={[styles.boldText, { color: '#10B981' }]}>{result.confidence}</Text>
          </Text>
        </View>
      )}

      <TouchableOpacity style={styles.backBtn} onPress={() => onNavigate('Home')}>
        <Ionicons name="arrow-back-outline" size={18} color="#6B7280" />
        <Text style={styles.backBtnText}>กลับหน้าหลัก</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}