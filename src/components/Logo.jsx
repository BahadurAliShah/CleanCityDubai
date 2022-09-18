import Image from "next/future/image";
import CCBCSLogo from "@/images/logos/logo.svg"

export function Logo(props) {
  return (
    <Image src={CCBCSLogo} alt="Logo" width="40" height="40"{...props}/>
  )
}
