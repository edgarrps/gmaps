import dynamic from 'next/dynamic'

const Map = dynamic(():any => import('../components/Map'), {ssr:false}) 

export default function Home() {
  return (
    <>
      <Map />
    </>
  )
}
   