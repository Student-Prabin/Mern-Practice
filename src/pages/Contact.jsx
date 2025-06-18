import Button from "../components/Button";

export default function Contact() {
  return (
    <div className=" w-[80vw] m-auto flex flex-col gap-4">
      <h1 className="text-4xl mb-10">Contact</h1>

      <p>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>

      <p className="text-[#607d8b] font-semibold">Catering Service, 42nd Living St, 43043 New York, NY</p>

      <p>You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:
      </p>
      <form action="#" className="flex flex-col">
        <input type="text" placeholder="Name" className="p-4 border-b-1" />
        <input type="number" placeholder="How many people" className="p-4 border-b-1" />
        <input type="date" placeholder="Name" className="p-4 border-b-1" />
        <input type="text" placeholder="Mesasge \ Special requirements" className="p-4 border-b-1" />

        <button className="mt-10 w-40 py-2 bg-gray-200">SEND MESSAGE</button>
      </form>
    </div>
  )
}