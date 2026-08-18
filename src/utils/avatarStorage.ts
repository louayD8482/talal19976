// Avatar management & presets utility
import defaultIcon from '../assets/images/subha_icon.jpg';
import masterAppIcon from '../assets/images/subha_master_app_icon_1787083064487.jpg';
import subhaEmblem4k from '../assets/images/subha_emblem_4k_1786904734773.jpg';
import subhaGold4k from '../assets/images/islamic_subha_gold_4k_1787064489149.jpg';
import royalCrystalSubha from '../assets/images/royal_crystal_subha_1787082900123.jpg';
import amberGoldSubha from '../assets/images/amber_gold_subha_1787082911611.jpg';
import emeraldMosqueSubha from '../assets/images/emerald_mosque_subha_1787082922697.jpg';

export interface AvatarOption {
  id: string;
  name: string;
  url: string;
  description: string;
}

export const PRESET_AVATARS: AvatarOption[] = [
  {
    id: 'master_app_emblem',
    name: 'شعار الهلال والمنارة الملكي 🌙',
    url: masterAppIcon,
    description: 'شعار التطبيق الرئيسي الفاخر بهلال الذهب والمنارة النورانية'
  },
  {
    id: 'royal_gold_emerald',
    name: 'السبحة الملكية الذهبية 4K 👑',
    url: defaultIcon,
    description: 'شعار فاخر بحبات الكهرمان والزمرد والإطار الذهبي الملكي'
  },
  {
    id: 'royal_crystal',
    name: 'بلور الياقوت والسماء 💎',
    url: royalCrystalSubha,
    description: 'حبات بلورية مشعة مع زخارف عربية وذهب ملكي'
  },
  {
    id: 'amber_gold',
    name: 'الكهرمان والذهب الوهّاج 📿',
    url: amberGoldSubha,
    description: 'كهرمان طبيعي خالص محاط بهالة نورانية روحانية'
  },
  {
    id: 'emerald_mosque',
    name: 'منارة الهدى والزمرد 🕌',
    url: emeraldMosqueSubha,
    description: 'سبحة زمردية حول قبة المسجد المنير وهلال السماء'
  },
  {
    id: 'luminous_emerald',
    name: 'النور الزمردي المبارك ✨',
    url: subhaEmblem4k,
    description: 'تصميم روحاني مشع بالأنوار الإسلامية'
  },
  {
    id: 'islamic_gold',
    name: 'الإشراق الذهبي الخالص 🌟',
    url: subhaGold4k,
    description: 'حبات السبحة الذهبية المشعة بالأنوار'
  }
];

export const DEFAULT_AVATAR_URL = defaultIcon;

export function getSavedAvatar(): string {
  if (typeof window === 'undefined') return DEFAULT_AVATAR_URL;
  const saved = localStorage.getItem('subha_custom_avatar');
  if (!saved || saved === '/avatar.jpg' || saved === '/subha_icon.jpg') {
    return DEFAULT_AVATAR_URL;
  }
  return saved;
}

export function saveCustomAvatar(urlOrBase64: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('subha_custom_avatar', urlOrBase64);
  }
}

export function resetToDefaultAvatar(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('subha_custom_avatar');
  }
}

