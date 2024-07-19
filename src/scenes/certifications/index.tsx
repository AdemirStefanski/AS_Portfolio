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
    {
      id: 2,
      title: 'Front-end Immersion',
      duration: '5 hours',
      syllabus: [
        'Consolidation of knowledge in HTML, CSS, and JavaScript.',
        'Practical development of the front-end for a music streaming page.',
        'Introduction to programming with popular frameworks like React and Angular.',
        'Learning advanced concepts: responsiveness, positioning, animations, and efficient design.',
        'Access to extra content on ChatGPT and AI applied to front-end development.',
        'Participation in exclusive live sessions for professional guidance.',
      ],
      imageUrl: '/src/assets/certification/certification_002.jpg',
    },
    {
      id: 3,
      title: 'Versioning with Git and GitHub',
      duration: '2 hours',
      syllabus: [
        'Introduction to version control, Git, and GitHub.',
        'Installing and configuring Git on various operating systems and secure session authentication.',
        'Handling repositories: creating, cloning, managing branches, saving, undoing, and synchronizing changes.',
        'Practical and thorough course with examples and exercises to master Git and GitHub, making you a valuable team member.',
      ],
      imageUrl: '/src/assets/certification/certification_003.jpg',
    },
    {
      id: 4,
      title: 'React: Desenvolva Aplicações Web Usando JSX e Hooks',
      duration: '58 hours',
      syllabus: [
        'HTML and CSS: development environments, file structure and tags',
        'HTML and CSS: Classes, positioning and Flexbox',
        'JavaScript for the Web: Create Dynamic Pages',
        'JavaScript: manipulating elements in the DOM',
        'React: building components with JSX',
        'Node.js and Terminal: Mastering the Front-End Development Environment',
        'React: configuring and structuring projects with Vite',
      ],
      imageUrl: '/src/assets/certification/Degree React_JSX_Hooks.jpg',
    },
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
    <section id="certifications" className="w-full md:py-20  flex flex-col items-center">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Certifications)}
      >
        <motion.div
          className="mx-auto w-auto flex flex-col items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5 flex justify-center items-center h-20 text-center">
            <TextTitles>Certifications</TextTitles>
          </div>
          <p className="py-5 text-center">
            Explore my certifications that demonstrate my dedication and proficiency in various essential front-end development technologies and tools.
          </p>
        </motion.div>
      </motion.div>

      {/* Lista de cursos */}
      <motion.div className="flex flex-col items-center w-full">
        <motion.div className="flex flex-wrap justify-center w-9/12">
          {courses.map((course) => (
            <div key={course.id} className="flex items-center justify-center m-2 max-w-64">
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