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
      imageUrl: 'Certify14',
    },
    {
      id: 2,
      title: 'Develop Web Applications With Javascript',
      duration: '63 hours',
      syllabus: [
        'JavaScript for the Web: Create Dynamic Pages',
        'JavaScript: manipulating elements in the DOM',
        'JavaScript: exploring element and localStorage manipulation',
        'JavaScript: validations and speech recognition',
        'JavaScript: consuming and processing data from an API',
        'JavaScript: array methods',
        'JavaScript: creating requests',
        'JavaScript: validating forms',
      ],
      imageUrl: "Certify8",
    },
    {
      id: 3,
      title: 'React: Develop Web Applications Using JSX And Hooks',
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
      imageUrl: 'Certify5',
    },
    {
      id: 4,
      title: 'Manage React Applications With Typescript',
      duration: '79 hours',
      syllabus: [
        'React: writing with Typescript',
        'React: style components with Styled Components and manipulate static files',
        'React: getting to know the React Router library',
        'React: Integrating your React project with APIs',
        'HTTP: understanding the web under the hood',
        'React: Managing State with Recoil',
        'React: testing your components',
        'React: optimizing performance',
      ],
      imageUrl: 'Certify11',
    },
    {
      id: 5,
      title: 'Develop Web And Mobile Applications With React And React Native',
      duration: '36 hours',
      syllabus: [
        'React Native: Building a Native-based App',
        'React Native: integrating an App with the Web API',
        'React with Typescript: developing an admin area',
        'React with Typescript: Develop a registration and authentication system',
      ],
      imageUrl: 'Certify7',
    },
    {
      id: 6,
      title: 'Versioning with Git and GitHub',
      duration: '2 hours',
      syllabus: [
        'Introduction to version control, Git, and GitHub.',
        'Installing and configuring Git on various operating systems and secure session authentication',
        'Handling repositories: creating, cloning, managing branches, saving, undoing, and synchronizing changes',
        'Practical and thorough course with examples and exercises to master Git and GitHub, making you a valuable team member',
      ],
      imageUrl: 'Certify3',
    },
    {
      id: 7,
      title: 'Next.js And Tailwind: Building A Design System',
      duration: '39 hours',
      syllabus: [
        'React: creating a Design System with TailwindCSS',
        'React: evolve your Design System with TailwindCSS',
        'React: level up your documentation in Storybook',
        'React: version and publish your Design System',
      ],
      imageUrl: 'Certify12',
    },
    {
      id: 8,
      title: 'Bootstrap 5: Responsive And Attractive Website Development',
      duration: '15 hours',
      syllabus: [
        'Bootstrap 5: create a responsive landing page',
        'Bootstrap 5: New Features and HTML, CSS, and JavaScript Best Practices',
      ],
      imageUrl: 'Certify4',
    },
    {
      id: 9,
      title: 'Flutter 3.0',
      duration: '96 hours',
      syllabus: [
        'Flutter: Widgets, Stateless, Stateful, Images and Animations',
        'Flutter: Controller, navigation and states',
        'Flutter: applying data persistence',
        'Flutter with WebAPI: integrating your application',
        'Flutter with Web API: evolving in application integration',
        'Flutter: styling and reproducing layouts',
        'Flutter: applying constraints and implementing responsive layouts',
        'Flutter: applying unit, widget and mock tests',
        'Flutter: state management with Provider',
      ],
      imageUrl: 'Certify9',
    },
    {
      id: 10,
      title: 'Getting Start with AWS',
      duration: '47 hours',
      syllabus: [
        'Amazon Lightsail: Making the Cloud Uncomplicated',
        'Amazon EC2: high availability and scalability in one application',
        'Amazon VPC: Configuring Networks on AWS',
        'Amazon S3: Manipulate and store objects in the cloud',
        'Database on AWS: Manage RDS and DynamoDB',
        'AWS: Understanding and Controlling Service Costs',
      ],
      imageUrl: 'Certify10',
    },
    {
      id: 11,
      title: 'Front-end Immersion',
      duration: '5 hours',
      syllabus: [
        'Consolidation of knowledge in HTML, CSS, and JavaScript',
        'Practical development of the front-end for a music streaming page',
        'Introduction to programming with popular frameworks like React and Angular',
        'Learning advanced concepts: responsiveness, positioning, animations, and efficient design',
        'Access to extra content on ChatGPT and AI applied to front-end development',
        'Participation in exclusive live sessions for professional guidance',
      ],
      imageUrl: 'Certify2',
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
    <section id="certifications" className="w-full min-h-screen md:py-20 sm:py-12 py-6 flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center w-full ">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Certifications)}>
          <motion.div
            className="mx-auto w-11/12 flex flex-col items-center justify-center "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <motion.div
              className="md:w-3/5 flex justify-center items-center h-20 text-center "
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <TextTitles>Certifications</TextTitles>
            </motion.div>
            <motion.p
              className="pb-4 text-center w-9/12 font-semibold "
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Get to know more about my proficiency in various front-end development technologies and tools.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Lista de cursos */}
        <motion.div className="flex flex-col items-center w-full">
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-9/12 bg-primary-50 rounded-lg p-3 mt-8">
            {courses.map((course) => (
              <div key={course.id} className="flex items-center justify-between m-2">
                <div className="flex items-center space-x-2">
                  <img
                    src={CertificateIcon}
                    alt={`${course.title} icon`}
                    className="w-8 h-8 object-contain cursor-pointer"
                    onClick={() => handleOpenModal(course)}
                  />
                  <p
                    className="font-semibold cursor-pointer"
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
      </div>
    </section>


  )
}

export default Certifications