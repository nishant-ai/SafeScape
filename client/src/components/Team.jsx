const Team = () => {
    const teamData=[
        {
            name:'Priyanshu Gupta',
            role: 'Developer',
            image: 'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80'
        },
        {
            name:'Nishant Sharma',
            role: 'Designer',
            image:'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80'
        },
        {
            name:'Digvijay Singh Shekhavat',
            role: 'Developer',
            image:'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80'
        },
        {
            name:'Parul Singh',
            role: 'Developer',
            image:'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80'
        }
    ]
    return (
        <div className="flex flex-col">
            <section className="flex items-center justify-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
                        <h1 className="text-gray-900 text-4xl font-bold mb-8 text-center">
                            Meet the Team
                        </h1>

                        <p className="text-gray-700 text-lg font-light text-center">
                            With over 100 years of combined experience, we have got a well-seasoned team at the helm.
                        </p>
                    </div>
            </section>
            <div className="flex justify-evenly">
            {teamData.map((item, index) => (
                <div key={index} className="rounded-3xl flex items-center justify-center flex-col">
                    <img src={item.image} alt="" className="rounded-3xl"/>
                    <div className="px-6 py-4 text-center">
                        <div className="font-bold text-xl mb-2 text-black">{item.name}</div>
                        <p className="text-gray-700 text-base">{item.role}</p>
                        </div>
                        </div>
                        ))}
                </div>
            </div>
    )
}

export default Team;
