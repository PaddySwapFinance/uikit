import React from "react";
import { useTheme } from "styled-components";
import { SvgProps } from "../../../components/Svg";
import Flex from "../../../components/Box/Flex";
import Dropdown from "../../../components/Dropdown/Dropdown";
import Link from "../../../components/Link/Link";
import * as IconModule from "../icons";
import { socials } from "../config";

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };


const SocialLinks: React.FC = () => {
  const theme = useTheme();
  
  return (<Flex>
    {socials.map((social, index) => {
      const Icon = Icons[social.icon];
      
      const iconProps = { width: "24px", style: { cursor: "pointer" }};
      const mr = index < socials.length - 1 ? "16px" : 0;
      // if (social.items) {
      //   return (
      //     <Dropdown key={social.label} position="top" target={<Icon {...iconProps} mr={mr} />}>
      //       {social.items.map((item) => (
      //         <Link external key={item.label} href={item.href} aria-label={item.label} color="textSubtle">
      //           {item.label}
      //         </Link>
      //       ))}
      //     </Dropdown>
      //   );
      // }
      return (
        <Link external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
          <Icon {...iconProps} style={{fill: theme.isDark ? social.colorDark : social.color}}/>
        </Link>
      );
    })}
  </Flex>)
};

export default React.memo(SocialLinks, () => true);
