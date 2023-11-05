import Priyanshu from "../assets/WhatsApp Image 2023-10-02 at 7.53.10 PM.jpeg";
import Parul from "../assets/parul.jpeg";
import digvijay from "../assets/digvijay.jpeg";
import Nishant from "../assets/Screenshot from 2023-11-05 13-47-02.png"

const Team = () => {
    const teamData = [
        {
            name: 'Priyanshu Gupta',
            role: 'Full Stack Developer',
            image: Priyanshu
        }, {
            name: 'Nishant Sharma',
            role: 'Full Stack Developer',
            image: Nishant
        }, {
            name: 'Digvijay Singh Shekhavat',
            role: 'AI/ML Developer',
            image: digvijay
        }, {
            name: 'Parul Singh',
            role: 'UI/UX',
            image: Parul
        }
    ]
    return (
        <div className="flex flex-col" id="team">
            <section className="flex items-center justify-center mb-24">
                <div className="w-full lg:w-6/12 px-4">
                    <h1 className="text-gray-900 text-4xl font-bold mb-8 text-center">
                        Meet the Team
                    </h1>

                    <p className="text-gray-700 text-lg font-light text-center">
                        With months of combined experience, we have got a well-seasoned team at the helm.
                    </p>
                </div>
            </section>
            <div className="flex justify-evenly">
                {
                teamData.map((item, index) => (
                    <div key={index}
                        className="rounded-3xl flex items-center justify-center flex-col">
                        <img src={
                                item.image
                            }
                            alt=""
                            className="rounded-3xl w-72 h-72"/>
                        <div className="px-6 py-4 text-center">
                            <div className="font-bold text-xl mb-2 text-black">
                                {
                                item.name
                            }</div>
                            <p className="text-gray-700 text-base">
                                {
                                item.role
                            }</p>
                        </div>
                    </div>
                ))
            } </div>
        </div>
    )
}

export default Team;
