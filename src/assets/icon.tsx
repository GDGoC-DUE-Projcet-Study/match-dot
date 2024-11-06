import { IcBook } from './icons';
import { IcDiscord } from './icons';
import { IcGithub } from './icons';
import { IcLike } from './icons';
import { IcList } from './icons';
import { IcLogoInstagram } from './icons';
import { IcMail } from './icons';
import { IcMenu } from './icons';
import { IcMessage } from './icons';
import { IcPencil } from './icons';
import { IcPerson } from './icons';
import { IcPersons } from './icons';
import { IcSend } from './icons';
import { IcView } from './icons';
import { IcWrite } from './icons';

const icons = {
  IcBook,
  IcDiscord,
  IcGithub,
  IcLike,
  IcList,
  IcLogoInstagram,
  IcMail,
  IcMenu,
  IcMessage,
  IcPencil,
  IcPerson,
  IcPersons,
  IcSend,
  IcView,
  IcWrite,
};

type IconProps = {
  name: keyof typeof icons;
} & React.SVGProps<SVGSVGElement>;

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const Icon = icons[name];

  if (!Icon) {
    return null; // 지정된 이름에 해당하는 아이콘이 없을 경우 null 반환
  }

  return <Icon {...props} />;
};

export default Icon;
