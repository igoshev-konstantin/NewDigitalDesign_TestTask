//package ru.new_digital_world.web_app;
//
//import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;
//
///*Вместо файла web.xml*/
//public class MyWebInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {
//
//    @Override
//    protected Class<?>[] getRootConfigClasses() {
//        return null;
//    }
//
//    @Override
//    protected Class<?>[] getServletConfigClasses() {
//        return new Class[]{NewDigitalWorldApplication.class};         /*Вместо
//        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>*/
//    }
//
//    @Override
//    protected String[] getServletMappings() {
//        return new String[]{"/"};           /*Вместо <url-pattern>/</url-pattern>*/
//    }
//}