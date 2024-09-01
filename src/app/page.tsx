import React from "react"
import Image from "next/image"
const page = () => {
  return (
    <div>home page
      <Image src="src/house.jfif" alt="alt" width={500} height={500} />
    </div>
  )
}

export default page