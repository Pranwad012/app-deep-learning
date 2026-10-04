import { StyleSheet } from 'react-native';

export const predictStyles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  subtitle: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 4,
    marginBottom: 20,
  },
  imageBox: {
    width: 224,
    height: 224,
    borderRadius: 16,
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  placeholder: {
    alignItems: 'center',
  },
  placeholderText: {
    color: '#9CA3AF',
    marginTop: 6,
    fontSize: 13,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    width: '100%',
    marginBottom: 12,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    gap: 6,
  },
  btnSecondary: {
    flex: 1,
    backgroundColor: '#EEF2FF',
    borderWidth: 1,
    borderColor: '#C7D2FE',
  },
  btnSecondaryText: {
    color: '#4F46E5',
    fontWeight: '600',
  },
  btnPrimary: {
    width: '100%',
    backgroundColor: '#4F46E5',
    marginBottom: 16,
  },
  btnPrimaryText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 15,
  },
  disabledBtn: {
    backgroundColor: '#A5B4FC',
  },
  resultCard: {
    width: '100%',
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 16,
  },
  resultHeader: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#1F2937',
  },
  resultDetail: {
    fontSize: 14,
    color: '#374151',
    marginTop: 2,
  },
  boldText: {
    fontWeight: 'bold',
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    gap: 4,
  },
  backBtnText: {
    color: '#6B7280',
  },
});