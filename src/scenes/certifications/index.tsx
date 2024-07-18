import TextTitles from "@/shared/TextTitles";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "./modalComponent"
import { Course } from "@/shared/types";


import CertificateIcon from "@/assets/icons/color/certificate.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Certifications = ({ setSelectedPage }: Props) => {

  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  // Dados dos cursos
  const courses: Course[] = [
    {
      id: 1,
      title: 'Full-Stack Software Development and Software Architecture',
      duration: '110 hours',
      syllabus: [
        'Modern HTML, CSS, and Basic JavaScript',
        'Intermediate JavaScript and Programming Logic',
        'Typing, TypeScript in Practice, and Introduction to Networks and Protocols',
        'SPA, SSR, SSG Under the Hood',
        'Getting Started with React and Scalable Professional Architecture',
        'Local/Remote Repositories (Git and GitHub)',
        'Node.js Overview and Building Scalable APIs with/without Express',
        'Databases, SQL, and Practical Projects (YouTube, WhatsApp Web)',
        'Introduction to DevOps and Real-Time Applications',
        'Micro-FrontEnds, Micro-Services, and Mobile App Development'
      ],
      imageUrl: '/src/assets/certification/certification_001.jpg',
    },
    // Adicione mais cursos conforme necessário
  ];

  const handleOpenModal = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  return (
    <section id="certifications" className="w-full py-40 bg-white">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Certifications)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 0.5}}
          variants={{
            hidden: {opacity: 0, x:-50},
            visible: {opacity:1, x:0},
          }}
        >
          <div className="md:w-3/5">
            <TextTitles>Certifications</TextTitles>
          </div>
          <p className="py-5" >
            Explore my certifications that demonstrate my dedication and proficiency in various essential front-end development technologies and tools.
          </p>
        </motion.div>
        
      </motion.div>

      {/* Lista de cursos */}
      <motion.div className="flex flex-wrap justify-center items-center gap-1 p-4 h-screen">
        <motion.div className="flex items-center justify-center">
        {courses.map((course) => (
          <div key={course.id} className="flex items-center justify-center">
            <div className="w-8 min-w-8">
              <img
                src={CertificateIcon}
                alt=""
                className="w-8 h-8 object-contain min-w-[22px]"
                onMouseEnter={() => console.log("onMouseEnter")}
              />
            </div>
            <div>
              <p
                className="font-semibold pl-2 cursor-pointer"
                onClick={() => handleOpenModal(course)}
              >
                {course.title}
              </p>
            </div>
          </div>
        ))}
        </motion.div>
        
        {/* Modal */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          content={selectedCourse}
        />
      )}
      </motion.div>

    </section>
  )
}

export default Certifications