
import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
    return (
        <section id="contact" className="grid h-screen py-6">
            <h2 className="text-3xl font-medium text-center">Contact</h2>
            <article className="flex gap-6">
                <address className="grid content-start gap-2 flex-1">
                    <h2 className="text-2xl not-italic">Have any questions?</h2>
                    <div className="flex items-center gap-2 p-2 rounded-full bg-evergreen-darker">
                        <span className="p-2 rounded-full bg-evergreen"><Mail /></span>
                        <p className="">german.diner@example.com</p>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-full bg-evergreen-darker">
                        <span className="p-2 rounded-full bg-evergreen"><Phone /></span>
                        <p>+49 00 00000000</p>
                    </div>
                </address>
                <div className="grid content-start gap-2 flex-1">
                    <h2 className="text-2xl">Service hours</h2>
                    <p className="flex items-center gap-2 p-2 rounded-full bg-evergreen-darker/50">Monday - Saturday: 8 AM - 11 PM</p>
                    <p className="flex items-center gap-2 p-2 rounded-full bg-evergreen-darker/50">Sunday: Closed</p>
                </div>
            </article>
            <article className="grid content-start gap-2">
                <h2 className="text-2xl">Where to find us?</h2>
                <div>
                    <iframe
                        height="300"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Sch%C3%B6nhauser%20Allee%205%20(Prenzlauer%20Berg)%20Berlin+()&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        className="w-full rounded-xs"
                    ></iframe>
                    <a href='https://www.versicherungen.at/au-pair-versicherung-rechner/'></a>
                    <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=584f63bf736d9e9b4ff60c7316fa582ed37750e8'></script>
                </div>
                <p className="flex items-center gap-2"><MapPin />Schönhauser Allee 5 (Prenzlauer Berg), Berlin</p>
            </article>
        </section>
    )
}