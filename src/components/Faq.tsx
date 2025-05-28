import Pretitle from "./Pretitle";
import FaqItem from "./FaqItem";

interface faqItemsDataProps {
   title: string;
   description: string;
}

const faqItemsData: faqItemsDataProps[] = [
   {
      title: "How long does a construction project usually take?",
      description: "Timelines vary based on project size and complexity.",
   },
   {
      title: "Do I need permits for my project?",
      description: "Timelines vary based on project size and complexity.",
   },
   {
      title: "What materials do you use?",
      description: "Timelines vary based on project size and complexity.",
   },
   {
      title: "Can I make changes after construction starts?",
      description: "Timelines vary based on project size and complexity.",
   },
   {
      title: "How much will my construction project cost?",
      description: "Timelines vary based on project size and complexity.",
   },
   {
      title: "How do you ensure quality and safety on-site?",
      description: "Timelines vary based on project size and complexity.",
   },
];

const Faq = () => {
   return (
      <section className="pt-16 xl:pt-32">
         <div className="container mx-auto">
            <div className="text-center max-w-[540px] mx-auto xl:mb-20">
               <Pretitle text="Faq" center />
               <h2 className="h2 mb-3">Got Questions? We1ve Got You Covered</h2>
               <p className="mb-11 max-w-[480px] mx-auto">
                  From project planning to final touches, we&apos;ve answered
                  the most common questions to help you make informed decisions.
               </p>
            </div>
            <div>
               <ul className="w-full flex flex-col">
                  {faqItemsData.map((item, index) => {
                     return (
                        <li key={index}>
                           <FaqItem
                              title={item.title}
                              description={item.description}
                           />
                        </li>
                     );
                  })}
               </ul>
            </div>
         </div>
      </section>
   );
};

export default Faq;
