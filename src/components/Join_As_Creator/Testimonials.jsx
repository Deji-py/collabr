import React, { useState } from "react";

function Testimonials() {
  const faqData = [
    {
      question: "What is Collabr?",
      answer:
        "Collabr is a transparent creator-brand collaboration platform that connects influencers with brands seeking authentic partnerships. It’s a space where creators can find exciting opportunities to collaborate with brands and showcase their unique influence.",
    },
    {
      question: "How can I join Collabr as a creator?",
      answer:
        "Joining Collabr is easy! Simply visit our website, click on “Join as a Creator,” and follow the simple steps to create your profile. Once registered, you’ll have access to a world of collaboration opportunities.",
    },
    {
      question: "Is Collabr open to all types of creators?",
      answer:
        "Absolutely! Collabr welcomes creators from all niches and follower counts. Whether you’re a seasoned influencer or just starting, our platform is designed to empower and support every creator.",
    },
    {
      question: "How does Collabr benefit influencers?",
      answer:
        "Collabr provides influencers with direct access to brand deals, the ability to manage collaborations efficiently, instant chat features for seamless communication with brands, and a secure payment system to ensure you always get paid for your work.",
    },
    {
      question: "Can I negotiate terms with brands on Collabr?",
      answer:
        "Yes, you can! Collabr offers an instant chat feature that allows you to communicate directly with brands. This feature enables negotiation of terms, discussing campaign details, and building strong partnerships within the platform.",
    },
    {
      question: "How do I manage my collaborations on Collabr?",
      answer:
        "Collabr provides a user-friendly dashboard where you can easily manage all aspects of your collaborations. Track upcoming, ongoing, and completed collaborations, ensuring you stay organized and focused on creating captivating content.",
    },
    {
      question: "Is Collabr a secure platform for payments?",
      answer:
        "Absolutely. Collabr prioritizes the security of payments. We ensure timely and reliable compensation for your creative contributions through our secure payment system.",
    },
    {
      question: "How can brands discover and connect with me on Collabr?",
      answer:
        "By creating a compelling profile that showcases your talent, strengths, and previous work, brands can discover and connect with you directly. Make sure your profile reflects the essence of your influence.",
    },
    {
      question:
        "Are there any fees associated with joining Collabr as a creator?",
      answer:
        "No, joining Collabr as a creator is completely free. We believe in empowering creators without any upfront costs. We charge only 15% as platform + marketing fee on every successful order.",
    },
  ];

  const [showQuestions, setShowQuestions] = useState(
    Array(faqData.length).fill(false)
  );

  const toggleQuestion = (index) => {
    setShowQuestions((prev) => {
      const updatedQuestions = [...prev];
      updatedQuestions[index] = !updatedQuestions[index];
      return updatedQuestions;
    });
  };

  const [show, setShow] = useState(false);

  return (
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto flex flex-col justify-center items-center max-w-6xl text-center">
          <h1
            data-aos="fade-up"
            class="lg:text-5xl lg:leading-normal  text-4xl font-semibold leading-10 tracking-tight "
          >
            Influencers Says about Collab
            <span className=" text-primary headfont  ">r</span>
          </h1>
          <p
            data-aos="fade-up"
            class="mt-2 text-xl  tracking-tight text-gray-700 sm:text-2xl lg:max-w-4xl"
          >
            Ready to embark on a journey of creativity, collaboration, and
            success? Join Collabr today and open the door to a world of exciting
            opportunities!
          </p>
        </div>
        <div class="mx-auto flex flex-col justify-center items-center mt-16  max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div class=" grid lg:grid-cols-3 pb-10">
            {[1, 2, 3].map(() => (
              <div
                data-aos="fade-up"
                class="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure class="rounded-2xl bg-gray-50 border-[0.2px] p-8 text-sm leading-6">
                  <blockquote class="text-gray-900 text-lg ">
                    <p>
                      “Laborum quis quam. Dolorum et ut quod quia. Voluptas
                      numquam delectus nihil. Aut enim doloremque et ipsam.”
                    </p>
                  </blockquote>
                  <figcaption class="mt-6 flex items-center gap-x-4">
                    <img
                      class="h-20 w-20 rounded-full bg-gray-50"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <div>
                      <div class="font-semibold text-lg text-gray-900">
                        Leslie Alexander
                      </div>
                      <div class="text-gray-600 text-md">@lesliealexander</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
          <button
            className={
              " p-2 lg:p-4 px-7 lg:px-10 mt-3 lg:mt-5  shadow-2xl shadow-[#CE85FF]  gap-2 text-lg rounded-full flex flex-row justify-center items-center transition-all bg-primary  text-white hover:bg-hoverprimary"
            }
          >
            <h1>Signup as a creator</h1>
          </button>
        </div>
      </div>

      {/* Faq */}
      <div className="bg-white mt-20">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-20 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
            <h2 className="text-4xl text-center mb-20 headfont font-bold leading-10 tracking-tight text-gray-900">
              Frequently asked questions
            </h2>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {faqData.map((item, index) => (
                <div className="pt-6 " key={index}>
                  <dt>
                    <button
                      type="button"
                      className="flex w-full items-start justify-between text-left text-gray-900"
                      onClick={() => toggleQuestion(index)}
                      aria-controls={`faq-${index}`}
                      aria-expanded={showQuestions[index]}
                    >
                      <span className="text-xl font-semibold leading-7">
                        {item.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        {showQuestions[index] ? (
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M18 12H6"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v12m6-6H6"
                            />
                          </svg>
                        )}
                      </span>
                    </button>
                  </dt>
                  <dd
                    className={`mt-2 pr-12 ${
                      showQuestions[index] ? "" : "hidden"
                    }`}
                    id={`faq-${index}`}
                  >
                    <p className=" leading-7 text-xl  text-gray-600">
                      {item.answer}
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
