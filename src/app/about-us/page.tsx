"use client";
import Image from "next/image";
import { FaHeartbeat } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { dropAnimation, leftAnimation, rightAnimation } from "@/lib/utils";

export default function AboutPage() {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true });
  const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: true });
  const { ref: ref6, inView: inView6 } = useInView({ triggerOnce: true });
  const { ref: ref7, inView: inView7 } = useInView({ triggerOnce: true });

  const variants = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <main className="h-auto w-full">
      <section className="relative flex h-60 w-full items-center justify-center md:h-80">
        <Image
          src={"/hold-hands.jpg"}
          fill
          alt="hold-hands"
          className="object-cover"
        />
        <div className="absolute z-10 h-full w-full bg-primary_blue/30"></div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.5 }}
          className="z-20 text-6xl font-black text-white"
        >
          About
        </motion.h1>
      </section>
      <section className="flex h-auto w-full flex-col py-4 md:h-[30rem] md:flex-row">
        <div className="relative h-80 w-full p-4 md:h-full">
          <motion.div
            ref={ref1}
            variants={leftAnimation}
            initial="hidden"
            animate={inView1 ? "show" : "hidden"}
            className="relative h-full w-full"
          >
            <Image
              src={"/image3.jpg"}
              fill
              alt="hold-hands"
              className="object-cover"
            />
          </motion.div>
        </div>
        <motion.div
          ref={ref1}
          variants={rightAnimation}
          initial="hidden"
          animate={inView1 ? "show" : "hidden"}
          className="grid h-auto w-full p-4 md:h-full"
        >
          <p className="my-2 text-neutral-600">
            Single Stop Carehome Ltd is a leading domiciliary care company based
            in East part of London, UK. With a focus on providing high-quality
            care services, we strive to enhance the lives of individuals in need
            of support, enabling them to live independently and comfortably
            within their own homes. At Single Top Carehome Ltd, we specialize in
            delivering compassionate and tailored care to a diverse range of
            individuals. Our primary focus is on meeting the unique needs of:
          </p>
          <p className="text-neutral-600">
            Older People: We understand the challenges that come with aging and
            provide comprehensive care and support to help older adults live
            comfortably and safely at home. People with Disabilities: Our team
            is experienced in supporting individuals with disabilities, ensuring
            they receive the assistance they need to lead fulfilling lives.
            People Living with Dementia: We offer specialized care for
            individuals living with dementia, promoting cognitive stimulation,
            social engagement, and a sense of security. People with Learning
            Disabilities: Our services are designed to empower individuals with
            learning disabilities, promoting independence and inclusion within
            their communities. Individuals with Autism Disorder: We provide
            personalized care plans tailored to the specific needs of
            individuals with autism, fostering a supportive and understanding
            environment.
          </p>
        </motion.div>
      </section>
      <section className="h-[35rem] w-full p-10">
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 border border-primary_blue p-4 shadow-md shadow-primary_blue">
          <motion.h1
            ref={ref2}
            variants={dropAnimation}
            initial="hidden"
            animate={inView2 ? "show" : "hidden"}
            className="text-4xl font-bold text-primary_blue md:text-6xl"
          >
            Our Approach
          </motion.h1>
          <motion.div
            ref={ref2}
            variants={dropAnimation}
            initial="hidden"
            animate={inView2 ? "show" : "hidden"}
            className="flex h-20 w-full items-center justify-center gap-5"
          >
            <hr className="h-1 w-32 bg-primary" />{" "}
            <FaHeartbeat className="text-4xl" color="0369a1" />
            <hr className="h-1 w-32 bg-primary" />
          </motion.div>
          <p>
            At Single Top Carehome Ltd, we believe in a holistic approach to
            care that prioritizes the physical, emotional, and social well-being
            of our service users. Our dedicated team of caregivers are trained
            to provide compassionate support while respecting the dignity,
            preferences, and cultural backgrounds of each individual. Community
            Engagement: We actively engage with the local community and
            collaborate with healthcare professionals to ensure a seamless and
            coordinated approach to care.
          </p>
        </div>
      </section>
      <section className="h-[30rem] w-full p-10">
        <div className="b flex h-full w-full flex-col items-center justify-center gap-3">
          <motion.h1
            ref={ref3}
            variants={dropAnimation}
            initial="hidden"
            animate={inView3 ? "show" : "hidden"}
            className="text-4xl font-bold text-primary_blue md:text-6xl"
          >
            Why Single Stop Care Home?
          </motion.h1>
          <motion.p
            ref={ref3}
            variants={dropAnimation}
            initial="hidden"
            animate={inView3 ? "show" : "hidden"}
          >
            At Single Top Carehome Ltd, we offer a comprehensive range of
            services tailored to meet the diverse needs of our clients. Our
            services include:
          </motion.p>
          <motion.div
            ref={ref3}
            variants={dropAnimation}
            initial="hidden"
            animate={inView3 ? "show" : "hidden"}
            className="flex h-20 w-full items-center justify-center gap-5"
          >
            <hr className="h-1 w-32 bg-primary" />{" "}
            <FaHeartbeat className="text-4xl" color="0369a1" />
            <hr className="h-1 w-32 bg-primary" />
          </motion.div>
        </div>
      </section>
      <section className="h-auto w-full bg-white p-4 text-white">
        <div className="flex h-auto w-full flex-col gap-4 p-2 md:h-60 md:flex-row">
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 border-2 bg-white p-2 shadow-md">
            <h1 className="text-3xl font-bold text-primary_blue">Personal Care:</h1>
            <p className="text-neutral-600 text-center">
              Assisting with daily tasks such as bathing, dressing, and
              grooming.
            </p>
          </div>
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 border-2 bg-white p-2 shadow-md">
            <h1 className="text-3xl font-bold text-primary_blue">Companionship:</h1>
            <p className="text-neutral-600 text-center">
              Providing companionship and emotional support to combat loneliness
              and isolation.
            </p>
          </div>
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 border-2 bg-white p-2 shadow-md">
            <h1 className="text-3xl font-bold text-primary_blue">
              Medication Management:
            </h1>
            <p className="text-neutral-600 text-center">
              Ensuring medications are taken as prescribed, including assistance
              with administration if required.
            </p>
          </div>
        </div>
        <div className="flex h-auto w-full flex-col gap-4 p-2 md:h-60 md:flex-row">
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 border-2 bg-white p-2 shadow-md">
            <h1 className="text-3xl font-bold text-primary_blue">Meal Preparation:</h1>
            <p className="text-neutral-600 text-center">
              Planning and preparing nutritious meals according to dietary
              requirements and preferences.
            </p>
          </div>
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 border-2 bg-white p-2 shadow-md">
            <h1 className="text-3xl font-bold text-primary_blue">Domestic Support:</h1>
            <p className="text-neutral-600 text-center">
              Assisting with light housekeeping tasks to maintain a clean and
              tidy living environment.
            </p>
          </div>
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 border-2 bg-white p-2 shadow-md">
            <h1 className="text-3xl font-bold text-primary_blue">Respite Care:</h1>
            <p className="text-neutral-600 text-center">
              Providing temporary care and support to give primary caregivers a
              well-deserved break.
            </p>
          </div>
        </div>
      </section>
      <section className="flex h-auto w-full flex-col py-4 md:h-[30rem] md:flex-row">
        <motion.div
          ref={ref4}
          variants={leftAnimation}
          initial="hidden"
          animate={inView4 ? "show" : "hidden"}
          className="relative h-80 w-full p-4 md:h-full"
        >
          <div className="relative h-full w-full">
            <Image
              src={"/image2.jpg"}
              fill
              alt="hold-hands"
              className="object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          ref={ref4}
          variants={rightAnimation}
          initial="hidden"
          animate={inView4 ? "show" : "hidden"}
          className="grid h-auto w-full p-4 md:h-full"
        >
          <h1 className="text-center text-4xl font-bold text-primary_blue md:text-6xl">
            Our Mission
          </h1>
          <div className="flex h-20 w-full items-center justify-center gap-5">
            <hr className="h-1 w-32 bg-primary" />{" "}
            <FaHeartbeat className="text-4xl" color="0369a1" />
            <hr className="h-1 w-32 bg-primary" />
          </div>

          <p className="my-2 text-neutral-600">
            Our mission is to provide exceptional home-based care services to
            individuals within the comfort and familiarity of their own homes.
            With a strong emphasis on personalized care and support, we are
            dedicated to enhancing the quality of life for our service users and
            enabling them to maintain their independence and dignity. With
            compassion, professionalism, and integrity, we aim to enhance the
            quality of life for our service users by promoting independence,
            dignity, and well-being. Through personalized care plans, dedicated
            staff, and collaborative partnerships, we strive to create a
            supportive and nurturing environment that empowers our clients to
            live fulfilling lives in their own homes. We are committed to
            delivering the highest standard of care, maintaining the trust and
            confidence of those we serve, and making a positive difference in
            the communities we are privileged to be a part of.
          </p>
        </motion.div>
      </section>
      <section className="flex h-auto w-full flex-col py-4 md:h-[30rem] md:flex-row">
        <motion.div
          ref={ref5}
          variants={leftAnimation}
          initial="hidden"
          animate={inView5 ? "show" : "hidden"}
          className="grid h-auto w-full p-4 md:h-full"
        >
          <h1 className="text-center text-4xl font-bold text-primary_blue md:text-6xl">
            Our Vision
          </h1>
          <div className="flex h-20 w-full items-center justify-center gap-5">
            <hr className="h-1 w-32 bg-primary" />{" "}
            <FaHeartbeat className="text-4xl" color="0369a1" />
            <hr className="h-1 w-32 bg-primary" />
          </div>

          <p className="my-2 text-neutral-600">
            Our vision at Single Stop Carehome Ltd is to be recognized as a
            leading provider of home-based care services in East London. We
            aspire to set the standard for excellence in personalized care,
            fostering independence, dignity, and well-being for our service
            users. Through compassionate support and innovative solutions, we
            strive to empower individuals to live their best lives in the
            comfort and familiarity of their own homes. Our commitment to
            quality, integrity, and community engagement guides us in our
            pursuit of creating positive and lasting impacts on the lives of
            those we serve.
          </p>
        </motion.div>
        <div className="relative h-80 w-full p-4 md:h-full">
          <motion.div
            ref={ref5}
            variants={rightAnimation}
            initial="hidden"
            animate={inView5 ? "show" : "hidden"}
            className="relative h-full w-full"
          >
            <Image
              src={"/image5.jpg"}
              fill
              alt="hold-hands"
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>
      <section className="flex h-auto w-full flex-col py-4 md:h-[30rem] md:flex-row">
        <motion.div
          ref={ref6}
          variants={leftAnimation}
          initial="hidden"
          animate={inView6 ? "show" : "hidden"}
          className="relative h-80 w-full p-4 md:h-full"
        >
          <div className="relative h-full w-full">
            <Image
              src={"/image1.jpg"}
              fill
              alt="hold-hands"
              className="object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          ref={ref6}
          variants={rightAnimation}
          initial="hidden"
          animate={inView6 ? "show" : "hidden"}
          className="grid h-auto w-full p-4 md:h-full"
        >
          <h1 className="text-center text-4xl font-bold text-primary_blue md:text-6xl">
            Our Objectives
          </h1>
          <div className="flex h-20 w-full items-center justify-center gap-5">
            <hr className="h-1 w-32 bg-primary" />{" "}
            <FaHeartbeat className="text-4xl" color="0369a1" />
            <hr className="h-1 w-32 bg-primary" />
          </div>

          <p className="my-2 text-neutral-600">
            • Expand service offerings: Explore opportunities to expand the
            range of services offered to service users, such as introducing new
            specialized care programmes or partnering with other healthcare
            providers to offer integrated care solutions. • Increase client
            satisfaction: Develop strategies to enhance client satisfaction
            levels by actively seeking feedback from service users and their
            families, addressing concerns promptly, and implementing changes to
            improve the overall care experience. • Ensure staff competence and
            satisfaction: Invest in staff training and development programs to
            enhance the skills and competencies of caregivers, promote
            professional growth and career advancement opportunities, and foster
            a positive work environment that encourages employee retention and
            satisfaction. • Foster community partnerships: Establish and
            maintain collaborative partnerships with local healthcare providers,
            community organizations, and government agencies to enhance access
            to resources, support services, and coordinated care for service
            users and their families.
          </p>
        </motion.div>
      </section>
      <section className="flex h-auto w-full flex-col py-4 md:h-[30rem] md:flex-row">
        <motion.div
          ref={ref7}
          variants={leftAnimation}
          initial="hidden"
          animate={inView7 ? "show" : "hidden"}
          className="grid h-auto w-full p-4 md:h-full"
        >
          <h1 className="text-center text-4xl font-bold text-primary_blue md:text-6xl">
            Our Values
          </h1>
          <div className="flex h-20 w-full items-center justify-center gap-5">
            <hr className="h-1 w-32 bg-primary" />{" "}
            <FaHeartbeat className="text-4xl" color="0369a1" />
            <hr className="h-1 w-32 bg-primary" />
          </div>

          <p className="my-2 text-neutral-600">
            • Compassion: We approach every interaction with empathy,
            understanding, and kindness, ensuring our service users feel valued,
            respected, and supported. • Excellence: We strive for excellence in
            all aspects of our work, continuously seeking opportunities for
            improvement and innovation to deliver the highest quality care
            services. • Integrity: We uphold the highest ethical standards in
            our conduct, maintaining transparency, honesty, and accountability
            in all our interactions with service users, their families, and our
            community partners. • Empowerment: We empower our service users to
            actively participate in their care decisions, promoting autonomy,
            independence, and self-determination in all aspects of their lives.
            • Continuous Learning: We embrace a culture of lifelong learning and
            professional development, investing in the growth and well-being of
            our staff to ensure they are equipped with the knowledge, skills,
            and resources to provide exceptional care.
          </p>
        </motion.div>
        <motion.div
          ref={ref7}
          variants={rightAnimation}
          initial="hidden"
          animate={inView7 ? "show" : "hidden"}
          className="relative h-80 w-full p-4 md:h-full"
        >
          <div className="relative h-full w-full">
            <Image
              src={"/image6.jpg"}
              fill
              alt="hold-hands"
              className="object-cover"
            />
          </div>
        </motion.div>
      </section>
    </main>
  );
}
