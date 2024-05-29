import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'
import RightSidebar from '../../components/RightSidebar';

const Home = () => {
    const loggedIn = { firstName: 'Tody', lastName: 'JSM', email: 'contact@jsmmastery.pro' }

    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn.firstName || 'Guest'}
                        subtext="Access and manage your account and transactions efficently."
                    />
                </header>
                <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250.35} />
            </div>
            <RightSidebar user={loggedIn} transactions={[]} banks={[{ currentBalance: 123.50 }, { currentBalance: 500.50 }]} />
        </section>
    )
}

export default Home