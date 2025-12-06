import React from 'react';

export default function ModalProject() {
  return (
    <div className="modal fade" id="modal1" tabIndex="-1" aria-hidden="true" aria-labelledby="modalLabel1">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content glass-modal p-3">
          <button type="button" className="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Fermer"></button>
          <h3 id="modalLabel1" className="mb-3">Illustration Procreate</h3>
          <img src="assets/img/419295265_3513625992235533_7263084644896775798_n.jpg" alt="Illustration complète" className="img-fluid rounded mb-3" />
          <p className="text-white-50">Description détaillée de l’illustration...</p>
        </div>
      </div>
    </div>
  );
}