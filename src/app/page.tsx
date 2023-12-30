import { About } from '@/components/About/About'
import { Header } from '../components/Header/Header'
import { Experience } from '@/components/Experience/Experience'
import { MyApps } from '@/components/MyApps/MyApps'
import { GitCal } from '@/components/GitCal/GitCal'

export default function Home() {
    return (
        <main>
          <Header />
          <About />
          <Experience />
          <GitCal />
          <MyApps />
        </main>
    )
}
