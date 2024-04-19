import ParticlesComponent from "@/components/ui/particles";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="flex-grow">
      <ParticlesComponent/>
      <section className="">
            <div className="h-96 flex flex-col justify-center items-center gap-5">
                <h1 className="text-7xl font-bebas">Odontpro</h1>
                <p>
                    Aplicacion para la gestion de tus pacientes.
                </p>
            </div>
            <div className="h-96 flex items-start dark:invert justify-center">
                <Image 
                  className="hover:scale-110 transition-all ease-in-out duration-300" 
                  src="/dental-31726_640.png" alt="hola" width={300} height={300}/>
            </div>
        </section>
    </main>
  )
}
