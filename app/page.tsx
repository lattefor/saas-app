import { Button } from '@/components/ui/button'
import React from 'react'
import CompanionCard from '../components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main>
        <h1 className='text-2xl underline'>TESTCompanions</h1>
        <section
          className='home-section'
        >
          <CompanionCard 
            id="123"
            name="Neura the Binary Explore"
            topic="science"
            duration={45}
            color="$ffda6e"
            subject="math"
            bookmarked={false}
          />
         <CompanionCard 
          id="456"
          name="Neura the the Binary Explore"
          topic="math"
          duration={45}
          color="$ffda6e"
          subject="science"
          bookmarked={false}
           
         />
         <CompanionCard 
          id="678"
          name="Neura the the Binary Explore"
          topic="science"
          duration={45}
          color="$ffda6e"
           subject="test"
           bookmarked={false}
         />
        </section>
        <section className="home-section">
            <CompanionsList
                title="Recently completed sessions"
                companions={recentSessions}
                classNames="w-2/3 max-lg:w-full"
            />
            <CTA />
        </section>

    </main>


  )
}

export default Page