import { About } from '@/components/About/About'
import { Header } from '../components/Header/Header'
import { Experience } from '@/components/Experience/Experience'
import { MyApps } from '@/components/MyApps/MyApps'

export default function Home() {
    return (
        <main>
          <Header />
          <About />
          <Experience />
          <MyApps />
        </main>
    )
}
