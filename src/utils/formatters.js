// Para ve Tarih formatlama yardımcı fonksiyonları

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    maximumFractionDigits: 0
  }).format(amount);
};

export const formatShortCurrency = (amount) => {
  if (Math.abs(amount) >= 1_000_000_000) {
    return (amount / 1_000_000_000).toFixed(2).replace('.', ',') + ' Milyar ₺';
  }
  if (Math.abs(amount) >= 1_000_000) {
    return (amount / 1_000_000).toFixed(2).replace('.', ',') + ' Milyon ₺';
  }
  if (Math.abs(amount) >= 1_000) {
    return (amount / 1_000).toFixed(1).replace('.', ',') + ' Bin ₺';
  }
  return formatCurrency(amount);
};

export const formatDate = (dateString) => {
  if (!dateString) return '-';
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('tr-TR', options);
};
