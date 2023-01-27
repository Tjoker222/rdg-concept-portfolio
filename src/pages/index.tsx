import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Footer } from '@/components/Layouts/Footer';
import { Navbar } from '@/components/Layouts/Navbar';
import { NextPage } from 'next'

const Home: NextPage = ()=> {
  return (
    <>
      <div>
        <p className='font-inter text-style-regular-base'>RDG CONCEPT</p>
        <Button colorVariant='primary' title='Já possuo negócio' size='small'/>
        <Input full={true} label='Email'/>
        <Navbar/>
      </div>
    </>
  )
}

export default Home;
