import React from 'react';
import styles from './Politcs.module.css';

function Politcs() {
  return (
    <div className={styles.container}>
      <section>
        <h1 className={styles.primaryColor}>Política de Privacidade</h1>
        <p>De acordo com a Lei Geral de Proteção de Dados Pessoais <strong>(LGPD - Lei nº 13.709/2018)</strong> O Conselho Regional de Odontologia do Paraná (CROPR) respeita a privacidade dos visitantes do seu site e está comprometido em proteger os dados pessoais que possam ser eventualmente coletados.</p>

        <h4>1. Coleta de dados</h4>
        <p>Nosso site <strong>não realiza coleta, armazenamento ou tratamento direto de dados pessoais</strong> dos visitantes. No entanto, disponibilizamos um <strong>formulário incorporado via iframe</strong> de responsabilidade de terceiros. Ao preencher e enviar esse formulário, o usuário fornece dados diretamente à plataforma externa, sobre a qual o CROPR <strong>não tem controle nem acesso</strong>.</p>

        <h4>2. Finalidade</h4>
        <p>Os dados inseridos no formulário serão tratados de acordo com as regras da entidade responsável por ele. Recomendamos que os usuários procurem essa entidade para maiores informações.</p>

        <h4>3. Compartilhamento de dados</h4>
        <p>O CROPR <strong>não compartilha, armazena ou processa</strong> quaisquer dados pessoais inseridos nos formulários deste site.</p>

        <h4>4. Cookies</h4>
        <p>Este site <strong>não utiliza cookies para coleta de dados pessoais</strong>. No entanto, o formulário incorporado pode utilizar cookies próprios ou de terceiros. Consulte a Política de Cookies para mais informações.</p>

        <h4>5. Direitos do titular</h4>
        <p>O visitante tem o direito de solicitar informações, correção ou exclusão de seus dados pessoais diretamente ao responsável pelo formulário.</p>

        <h4>6. Alterações nesta política</h4>
        <p>Esta Política de Privacidade poderá ser atualizada periodicamente.</p>
      </section>

      <section>
          <h1 className={styles.primaryColor}>Política de Cookies</h1>
          <p>O site do  Conselho Regional de Odontologia do Paraná (CROPR) <strong>não utiliza cookies próprios</strong> com fins de coleta de dados pessoais, rastreamento ou publicidade.</p>

          <h4>Cookies de terceiros</h4>
          <p>O formulário incorporado em nosso site pode utilizar cookies de terceiros, para funcionalidades como segurança, autenticação ou análise de uso. Esses cookies são de responsabilidade da plataforma que fornece o formulário e estão sujeitos às políticas dessa entidade.</p>

          <p>O CROPR <strong>não tem controle ou acesso</strong> aos cookies definidos por essa plataforma.</p>

          <h4>Como gerenciar cookies</h4>
          <p>Você pode gerenciar ou bloquear cookies diretamente nas configurações do seu navegador.</p>

          <p>Para mais informações, consulte a Política de Privacidade.</p>
      </section>
    </div>
  );
}

export default Politcs;
