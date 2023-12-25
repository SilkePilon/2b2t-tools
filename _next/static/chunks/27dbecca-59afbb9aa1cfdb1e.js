"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2685],
  {
    4162: function (A, I, g) {
      let C;
      g.r(I),
        g.d(I, {
          ActiveCollisionTypes: function () {
            return Aq;
          },
          ActiveEvents: function () {
            return Ac;
          },
          ActiveHooks: function () {
            return AY;
          },
          Ball: function () {
            return EI;
          },
          BroadPhase: function () {
            return VA;
          },
          CCDSolver: function () {
            return mA;
          },
          Capsule: function () {
            return GI;
          },
          CharacterCollision: function () {
            return tI;
          },
          CoefficientCombineRule: function () {
            return Ah;
          },
          Collider: function () {
            return qI;
          },
          ColliderDesc: function () {
            return RI;
          },
          ColliderSet: function () {
            return sI;
          },
          Cone: function () {
            return NI;
          },
          ConvexPolyhedron: function () {
            return KI;
          },
          Cuboid: function () {
            return DI;
          },
          Cylinder: function () {
            return UI;
          },
          DebugRenderBuffers: function () {
            return HI;
          },
          DebugRenderPipeline: function () {
            return lI;
          },
          EventQueue: function () {
            return dI;
          },
          FeatureType: function () {
            return AN;
          },
          FixedImpulseJoint: function () {
            return pA;
          },
          FixedMultibodyJoint: function () {
            return bA;
          },
          HalfSpace: function () {
            return iI;
          },
          Heightfield: function () {
            return JI;
          },
          ImpulseJoint: function () {
            return lA;
          },
          ImpulseJointSet: function () {
            return OA;
          },
          IntegrationParameters: function () {
            return HA;
          },
          IslandManager: function () {
            return XA;
          },
          JointData: function () {
            return TA;
          },
          JointType: function () {
            return AJ;
          },
          KinematicCharacterController: function () {
            return pI;
          },
          MassPropsMode: function () {
            return AR;
          },
          MotorModel: function () {
            return AU;
          },
          MultibodyJoint: function () {
            return nA;
          },
          MultibodyJointSet: function () {
            return fA;
          },
          NarrowPhase: function () {
            return PA;
          },
          PhysicsPipeline: function () {
            return cI;
          },
          PointColliderProjection: function () {
            return _A;
          },
          PointProjection: function () {
            return vA;
          },
          Polyline: function () {
            return aI;
          },
          PrismaticImpulseJoint: function () {
            return eA;
          },
          PrismaticMultibodyJoint: function () {
            return WA;
          },
          Quaternion: function () {
            return oA;
          },
          QueryFilterFlags: function () {
            return As;
          },
          QueryPipeline: function () {
            return YI;
          },
          Ray: function () {
            return $A;
          },
          RayColliderIntersection: function () {
            return II;
          },
          RayColliderToi: function () {
            return gI;
          },
          RayIntersection: function () {
            return AI;
          },
          RevoluteImpulseJoint: function () {
            return rA;
          },
          RevoluteMultibodyJoint: function () {
            return jA;
          },
          RigidBody: function () {
            return sA;
          },
          RigidBodyDesc: function () {
            return cA;
          },
          RigidBodySet: function () {
            return LA;
          },
          RigidBodyType: function () {
            return Ay;
          },
          RotationOps: function () {
            return GA;
          },
          RoundCone: function () {
            return FI;
          },
          RoundConvexPolyhedron: function () {
            return yI;
          },
          RoundCuboid: function () {
            return oI;
          },
          RoundCylinder: function () {
            return hI;
          },
          RoundTriangle: function () {
            return SI;
          },
          SdpMatrix3: function () {
            return wA;
          },
          SdpMatrix3Ops: function () {
            return kA;
          },
          Segment: function () {
            return wI;
          },
          SerializationPipeline: function () {
            return LI;
          },
          Shape: function () {
            return QI;
          },
          ShapeColliderTOI: function () {
            return BI;
          },
          ShapeContact: function () {
            return uA;
          },
          ShapeTOI: function () {
            return CI;
          },
          ShapeType: function () {
            return AF;
          },
          SolverFlags: function () {
            return AL;
          },
          SphericalImpulseJoint: function () {
            return dA;
          },
          SphericalMultibodyJoint: function () {
            return xA;
          },
          TempContactForceEvent: function () {
            return rI;
          },
          TempContactManifold: function () {
            return zA;
          },
          TriMesh: function () {
            return MI;
          },
          Triangle: function () {
            return kI;
          },
          UnitImpulseJoint: function () {
            return tA;
          },
          UnitMultibodyJoint: function () {
            return ZA;
          },
          Vector3: function () {
            return iA;
          },
          VectorOps: function () {
            return DA;
          },
          World: function () {
            return eI;
          },
          default: function () {
            return AT;
          },
          init: function () {
            return XI;
          },
          version: function () {
            return VI;
          },
        });
      let o = Array(32).fill(void 0);
      o.push(void 0, null, !0, !1);
      let w = o.length;
      function B(A) {
        let I = o[A];
        return A < 36 || ((o[A] = w), (w = A)), I;
      }
      function Q(A) {
        w === o.length && o.push(o.length + 1);
        let I = w;
        return (w = o[I]), (o[I] = A), I;
      }
      function E(A) {
        return null == A;
      }
      let k = new Float64Array();
      function D() {
        return 0 === k.byteLength && (k = new Float64Array(C.memory.buffer)), k;
      }
      let M = new Int32Array();
      function G() {
        return 0 === M.byteLength && (M = new Int32Array(C.memory.buffer)), M;
      }
      let y = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 });
      y.decode();
      let h = new Uint8Array();
      function S(A, I) {
        return y.decode(
          (0 === h.byteLength && (h = new Uint8Array(C.memory.buffer)),
          h).subarray(A, A + I),
        );
      }
      function a(A, I) {
        if (!(A instanceof I)) throw Error(`expected instance of ${I.name}`);
        return A.ptr;
      }
      let F = new Float32Array();
      function K() {
        return 0 === F.byteLength && (F = new Float32Array(C.memory.buffer)), F;
      }
      let c = 32;
      function J(A) {
        if (1 == c) throw Error("out of js stack");
        return (o[--c] = A), c;
      }
      function U(A, I) {
        return K().subarray(A / 4, A / 4 + I);
      }
      let Ag = new Uint32Array();
      function N() {
        return (
          0 === Ag.byteLength && (Ag = new Uint32Array(C.memory.buffer)), Ag
        );
      }
      let AC = 0;
      function q(A, I) {
        let g = I(4 * A.length);
        return K().set(A, g / 4), (AC = A.length), g;
      }
      function R(A, I) {
        let g = I(4 * A.length);
        return N().set(A, g / 4), (AC = A.length), g;
      }
      function s(A, I) {
        try {
          return A.apply(this, I);
        } catch (A) {
          C.__wbindgen_exn_store(Q(A));
        }
      }
      Object.freeze({
        Revolute: 0,
        0: "Revolute",
        Fixed: 1,
        1: "Fixed",
        Prismatic: 2,
        2: "Prismatic",
        Spherical: 3,
        3: "Spherical",
        Generic: 4,
        4: "Generic",
      }),
        Object.freeze({
          AccelerationBased: 0,
          0: "AccelerationBased",
          ForceBased: 1,
          1: "ForceBased",
        });
      let AB = Object.freeze({
        X: 0,
        0: "X",
        Y: 1,
        1: "Y",
        Z: 2,
        2: "Z",
        AngX: 3,
        3: "AngX",
        AngY: 4,
        4: "AngY",
        AngZ: 5,
        5: "AngZ",
      });
      Object.freeze({
        Dynamic: 0,
        0: "Dynamic",
        Fixed: 1,
        1: "Fixed",
        KinematicPositionBased: 2,
        2: "KinematicPositionBased",
        KinematicVelocityBased: 3,
        3: "KinematicVelocityBased",
      }),
        Object.freeze({
          Vertex: 0,
          0: "Vertex",
          Edge: 1,
          1: "Edge",
          Face: 2,
          2: "Face",
          Unknown: 3,
          3: "Unknown",
        }),
        Object.freeze({
          Ball: 0,
          0: "Ball",
          Cuboid: 1,
          1: "Cuboid",
          Capsule: 2,
          2: "Capsule",
          Segment: 3,
          3: "Segment",
          Polyline: 4,
          4: "Polyline",
          Triangle: 5,
          5: "Triangle",
          TriMesh: 6,
          6: "TriMesh",
          HeightField: 7,
          7: "HeightField",
          Compound: 8,
          8: "Compound",
          ConvexPolyhedron: 9,
          9: "ConvexPolyhedron",
          Cylinder: 10,
          10: "Cylinder",
          Cone: 11,
          11: "Cone",
          RoundCuboid: 12,
          12: "RoundCuboid",
          RoundTriangle: 13,
          13: "RoundTriangle",
          RoundCylinder: 14,
          14: "RoundCylinder",
          RoundCone: 15,
          15: "RoundCone",
          RoundConvexPolyhedron: 16,
          16: "RoundConvexPolyhedron",
          HalfSpace: 17,
          17: "HalfSpace",
        });
      let Y = class Y {
        static __wrap(A) {
          let I = Object.create(Y.prototype);
          return (I.ptr = A), I;
        }
        __destroy_into_raw() {
          let A = this.ptr;
          return (this.ptr = 0), A;
        }
        free() {
          let A = this.__destroy_into_raw();
          C.__wbg_rawbroadphase_free(A);
        }
        constructor() {
          let A = C.rawbroadphase_new();
          return Y.__wrap(A);
        }
      };
      let L = class L {
        static __wrap(A) {
          let I = Object.create(L.prototype);
          return (I.ptr = A), I;
        }
        __destroy_into_raw() {
          let A = this.ptr;
          return (this.ptr = 0), A;
        }
        free() {
          let A = this.__destroy_into_raw();
          C.__wbg_rawccdsolver_free(A);
        }
        constructor() {
          let A = C.rawccdsolver_new();
          return L.__wrap(A);
        }
      };
      let H = class H {
        static __wrap(A) {
          let I = Object.create(H.prototype);
          return (I.ptr = A), I;
        }
        __destroy_into_raw() {
          let A = this.ptr;
          return (this.ptr = 0), A;
        }
        free() {
          let A = this.__destroy_into_raw();
          C.__wbg_rawcharactercollision_free(A);
        }
        constructor() {
          let A = C.rawcharactercollision_new();
          return H.__wrap(A);
        }
        handle() {
          return C.rawcharactercollision_handle(this.ptr);
        }
        translationApplied() {
          let A = C.rawcharactercollision_translationApplied(this.ptr);
          return QA.__wrap(A);
        }
        translationRemaining() {
          let A = C.rawcharactercollision_translationRemaining(this.ptr);
          return QA.__wrap(A);
        }
        toi() {
          return C.rawcharactercollision_toi(this.ptr);
        }
        worldWitness1() {
          let A = C.rawcharactercollision_worldWitness1(this.ptr);
          return QA.__wrap(A);
        }
        worldWitness2() {
          let A = C.rawcharactercollision_worldWitness2(this.ptr);
          return QA.__wrap(A);
        }
        worldNormal1() {
          let A = C.rawcharactercollision_worldNormal1(this.ptr);
          return QA.__wrap(A);
        }
        worldNormal2() {
          let A = C.rawcharactercollision_worldNormal2(this.ptr);
          return QA.__wrap(A);
        }
      };
      let l = class l {
        static __wrap(A) {
          let I = Object.create(l.prototype);
          return (I.ptr = A), I;
        }
        __destroy_into_raw() {
          let A = this.ptr;
          return (this.ptr = 0), A;
        }
        free() {
          let A = this.__destroy_into_raw();
          C.__wbg_rawcolliderset_free(A);
        }
        coTranslation(A) {
          let I = C.rawcolliderset_coTranslation(this.ptr, A);
          return QA.__wrap(I);
        }
        coRotation(A) {
          let I = C.rawcolliderset_coRotation(this.ptr, A);
          return _.__wrap(I);
        }
        coSetTranslation(A, I, g, o) {
          C.rawcolliderset_coSetTranslation(this.ptr, A, I, g, o);
        }
        coSetTranslationWrtParent(A, I, g, o) {
          C.rawcolliderset_coSetTranslationWrtParent(this.ptr, A, I, g, o);
        }
        coSetRotation(A, I, g, o, w) {
          C.rawcolliderset_coSetRotation(this.ptr, A, I, g, o, w);
        }
        coSetRotationWrtParent(A, I, g, o, w) {
          C.rawcolliderset_coSetRotationWrtParent(this.ptr, A, I, g, o, w);
        }
        coIsSensor(A) {
          return 0 !== C.rawcolliderset_coIsSensor(this.ptr, A);
        }
        coShapeType(A) {
          return C.rawcolliderset_coShapeType(this.ptr, A) >>> 0;
        }
        coHalfspaceNormal(A) {
          let I = C.rawcolliderset_coHalfspaceNormal(this.ptr, A);
          return 0 === I ? void 0 : QA.__wrap(I);
        }
        coHalfExtents(A) {
          let I = C.rawcolliderset_coHalfExtents(this.ptr, A);
          return 0 === I ? void 0 : QA.__wrap(I);
        }
        coSetHalfExtents(A, I) {
          a(I, QA), C.rawcolliderset_coSetHalfExtents(this.ptr, A, I.ptr);
        }
        coRadius(A) {
          try {
            let o = C.__wbindgen_add_to_stack_pointer(-16);
            C.rawcolliderset_coRadius(o, this.ptr, A);
            var I = G()[o / 4 + 0],
              g = K()[o / 4 + 1];
            return 0 === I ? void 0 : g;
          } finally {
            C.__wbindgen_add_to_stack_pointer(16);
          }
        }
        coSetRadius(A, I) {
          C.rawcolliderset_coSetRadius(this.ptr, A, I);
        }
        coHalfHeight(A) {
          try {
            let o = C.__wbindgen_add_to_stack_pointer(-16);
            C.rawcolliderset_coHalfHeight(o, this.ptr, A);
            var I = G()[o / 4 + 0],
              g = K()[o / 4 + 1];
            return 0 === I ? void 0 : g;
          } finally {
            C.__wbindgen_add_to_stack_pointer(16);
          }
        }
        coSetHalfHeight(A, I) {
          C.rawcolliderset_coSetHalfHeight(this.ptr, A, I);
        }
        coRoundRadius(A) {
          try {
            let o = C.__wbindgen_add_to_stack_pointer(-16);
            C.rawcolliderset_coRoundRadius(o, this.ptr, A);
            var I = G()[o / 4 + 0],
              g = K()[o / 4 + 1];
            return 0 === I ? void 0 : g;
          } finally {
            C.__wbindgen_add_to_stack_pointer(16);
          }
        }
        coSetRoundRadius(A, I) {
          C.rawcolliderset_coSetRoundRadius(this.ptr, A, I);
        }
        coVertices(A) {
          try {
            let o;
            let w = C.__wbindgen_add_to_stack_pointer(-16);
            C.rawcolliderset_coVertices(w, this.ptr, A);
            var I = G()[w / 4 + 0],
              g = G()[w / 4 + 1];
            return (
              0 !== I && ((o = U(I, g).slice()), C.__wbindgen_free(I, 4 * g)), o
            );
          } finally {
            C.__wbindgen_add_to_stack_pointer(16);
          }
        }
        coIndices(A) {
          try {
            let o;
            let w = C.__wbindgen_add_to_stack_pointer(-16);
            C.rawcolliderset_coIndices(w, this.ptr, A);
            var I = G()[w / 4 + 0],
              g = G()[w / 4 + 1];
            return (
              0 !== I &&
                ((o = N()
                  .subarray(I / 4, I / 4 + g)
                  .slice()),
                C.__wbindgen_free(I, 4 * g)),
              o
            );
          } finally {
            C.__wbindgen_add_to_stack_pointer(16);
          }
        }
        coHeightfieldHeights(A) {
          try {
            let o;
            let w = C.__wbindgen_add_to_stack_pointer(-16);
            C.rawcolliderset_coHeightfieldHeights(w, this.ptr, A);
            var I = G()[w / 4 + 0],
              g = G()[w / 4 + 1];
            return (
              0 !== I && ((o = U(I, g).slice()), C.__wbindgen_free(I, 4 * g)), o
            );
          } finally {
            C.__wbindgen_add_to_stack_pointer(16);
          }
        }
        coHeightfieldScale(A) {
          let I = C.rawcolliderset_coHeightfieldScale(this.ptr, A);
          return 0 === I ? void 0 : QA.__wrap(I);
        }
        coHeightfieldNRows(A) {
          try {
            let o = C.__wbindgen_add_to_stack_pointer(-16);
            C.rawcolliderset_coHeightfieldNRows(o, this.ptr, A);
            var I = G()[o / 4 + 0],
              g = G()[o / 4 + 1];
            return 0 === I ? void 0 : g >>> 0;
          } finally {
            C.__wbindgen_add_to_stack_pointer(16);
          }
        }
        coHeightfieldNCols(A) {
          try {
            let o = C.__wbindgen_add_to_stack_pointer(-16);
            C.rawcolliderset_coHeightfieldNCols(o, this.ptr, A);
            var I = G()[o / 4 + 0],
              g = G()[o / 4 + 1];
            return 0 === I ? void 0 : g >>> 0;
          } finally {
            C.__wbindgen_add_to_stack_pointer(16);
          }
        }
        coParent(A) {
          try {
            let o = C.__wbindgen_add_to_stack_pointer(-16);
            C.rawcolliderset_coParent(o, this.ptr, A);
            var I = G()[o / 4 + 0],
              g = D()[o / 8 + 1];
            return 0 === I ? void 0 : g;
          } finally {
            C.__wbindgen_add_to_stack_pointer(16);
          }
        }
        coSetEnabled(A, I) {
          C.rawcolliderset_coSetEnabled(this.ptr, A, I);
        }
        coIsEnabled(A) {
          return 0 !== C.rawcolliderset_coIsEnabled(this.ptr, A);
        }
        coFriction(A) {
          return C.rawcolliderset_coFriction(this.ptr, A);
        }
        coRestitution(A) {
          return C.rawcolliderset_coRestitution(this.ptr, A);
        }
        coDensity(A) {
          return C.rawcolliderset_coDensity(this.ptr, A);
        }
        coMass(A) {
          return C.rawcolliderset_coMass(this.ptr, A);
        }
        coVolume(A) {
          return C.rawcolliderset_coVolume(this.ptr, A);
        }
        coCollisionGroups(A) {
          return C.rawcolliderset_coCollisionGroups(this.ptr, A) >>> 0;
        }
        coSolverGroups(A) {
          return C.rawcolliderset_coSolverGroups(this.ptr, A) >>> 0;
        }
        coActiveHooks(A) {
          return C.rawcolliderset_coActiveHooks(this.ptr, A) >>> 0;
        }
        coActiveCollisionTypes(A) {
          return C.rawcolliderset_coActiveCollisionTypes(this.ptr, A);
        }
        coActiveEvents(A) {
          return C.rawcolliderset_coActiveEvents(this.ptr, A) >>> 0;
        }
        coContactForceEventThreshold(A) {
          return C.rawcolliderset_coContactForceEventThreshold(this.ptr, A);
        }
        coContainsPoint(A, I) {
          return (
            a(I, QA), 0 !== C.rawcolliderset_coContainsPoint(this.ptr, A, I.ptr)
          );
        }
        coCastShape(A, I, g, o, w, k, M, y) {
          a(I, QA), a(g, IA), a(o, QA), a(w, _), a(k, QA);
          let h = C.rawcolliderset_coCastShape(
            this.ptr,
            A,
            I.ptr,
            g.ptr,
            o.ptr,
            w.ptr,
            k.ptr,
            M,
            y,
          );
          return 0 === h ? void 0 : BA.__wrap(h);
        }
        coCastCollider(A, I, g, o, w, k) {
          a(I, QA), a(o, QA);
          let M = C.rawcolliderset_coCastCollider(
            this.ptr,
            A,
            I.ptr,
            g,
            o.ptr,
            w,
            k,
          );
          return 0 === M ? void 0 : gA.__wrap(M);
        }
        coIntersectsShape(A, I, g, o) {
          return (
            a(I, IA),
            a(g, QA),
            a(o, _),
            0 !==
              C.rawcolliderset_coIntersectsShape(
                this.ptr,
                A,
                I.ptr,
                g.ptr,
                o.ptr,
              )
          );
        }
        coContactShape(A, I, g, o, w) {
          a(I, IA), a(g, QA), a(o, _);
          let k = C.rawcolliderset_coContactShape(
            this.ptr,
            A,
            I.ptr,
            g.ptr,
            o.ptr,
            w,
          );
          return 0 === k ? void 0 : CA.__wrap(k);
        }
        coContactCollider(A, I, g) {
          let o = C.rawcolliderset_coContactCollider(this.ptr, A, I, g);
          return 0 === o ? void 0 : CA.__wrap(o);
        }
        coProjectPoint(A, I, g) {
          a(I, QA);
          let o = C.rawcolliderset_coProjectPoint(this.ptr, A, I.ptr, g);
          return X.__wrap(o);
        }
        coIntersectsRay(A, I, g, o) {
          return (
            a(I, QA),
            a(g, QA),
            0 !== C.rawcolliderset_coIntersectsRay(this.ptr, A, I.ptr, g.ptr, o)
          );
        }
        coCastRay(A, I, g, o, w) {
          return (
            a(I, QA),
            a(g, QA),
            C.rawcolliderset_coCastRay(this.ptr, A, I.ptr, g.ptr, o, w)
          );
        }
        coCastRayAndGetNormal(A, I, g, o, w) {
          a(I, QA), a(g, QA);
          let k = C.rawcolliderset_coCastRayAndGetNormal(
            this.ptr,
            A,
            I.ptr,
            g.ptr,
            o,
            w,
          );
          return 0 === k ? void 0 : u.__wrap(k);
        }
        coSetSensor(A, I) {
          C.rawcolliderset_coSetSensor(this.ptr, A, I);
        }
        coSetRestitution(A, I) {
          C.rawcolliderset_coSetRestitution(this.ptr, A, I);
        }
        coSetFriction(A, I) {
          C.rawcolliderset_coSetFriction(this.ptr, A, I);
        }
        coFrictionCombineRule(A) {
          return C.rawcolliderset_coFrictionCombineRule(this.ptr, A) >>> 0;
        }
        coSetFrictionCombineRule(A, I) {
          C.rawcolliderset_coSetFrictionCombineRule(this.ptr, A, I);
        }
        coRestitutionCombineRule(A) {
          return C.rawcolliderset_coRestitutionCombineRule(this.ptr, A) >>> 0;
        }
        coSetRestitutionCombineRule(A, I) {
          C.rawcolliderset_coSetRestitutionCombineRule(this.ptr, A, I);
        }
        coSetCollisionGroups(A, I) {
          C.rawcolliderset_coSetCollisionGroups(this.ptr, A, I);
        }
        coSetSolverGroups(A, I) {
          C.rawcolliderset_coSetSolverGroups(this.ptr, A, I);
        }
        coSetActiveHooks(A, I) {
          C.rawcolliderset_coSetActiveHooks(this.ptr, A, I);
        }
        coSetActiveEvents(A, I) {
          C.rawcolliderset_coSetActiveEvents(this.ptr, A, I);
        }
        coSetActiveCollisionTypes(A, I) {
          C.rawcolliderset_coSetActiveCollisionTypes(this.ptr, A, I);
        }
        coSetShape(A, I) {
          a(I, IA), C.rawcolliderset_coSetShape(this.ptr, A, I.ptr);
        }
        coSetContactForceEventThreshold(A, I) {
          C.rawcolliderset_coSetContactForceEventThreshold(this.ptr, A, I);
        }
        coSetDensity(A, I) {
          C.rawcolliderset_coSetDensity(this.ptr, A, I);
        }
        coSetMass(A, I) {
          C.rawcolliderset_coSetMass(this.ptr, A, I);
        }
        coSetMassProperties(A, I, g, o, w) {
          a(g, QA),
            a(o, QA),
            a(w, _),
            C.rawcolliderset_coSetMassProperties(
              this.ptr,
              A,
              I,
              g.ptr,
              o.ptr,
              w.ptr,
            );
        }
        constructor() {
          let A = C.rawcolliderset_new();
          return l.__wrap(A);
        }
        len() {
          return C.rawcolliderset_len(this.ptr) >>> 0;
        }
        contains(A) {
          return 0 !== C.rawcolliderset_contains(this.ptr, A);
        }
        createCollider(
          A,
          I,
          g,
          o,
          w,
          k,
          M,
          y,
          h,
          F,
          c,
          Ag,
          AC,
          AB,
          AQ,
          AE,
          Ai,
          AD,
          Ao,
          AG,
          Aw,
          Ak,
          AS,
          Aa,
        ) {
          try {
            let Ay = C.__wbindgen_add_to_stack_pointer(-16);
            a(I, IA),
              a(g, QA),
              a(o, _),
              a(M, QA),
              a(y, QA),
              a(h, _),
              a(Aa, v),
              C.rawcolliderset_createCollider(
                Ay,
                this.ptr,
                A,
                I.ptr,
                g.ptr,
                o.ptr,
                w,
                k,
                M.ptr,
                y.ptr,
                h.ptr,
                F,
                c,
                Ag,
                AC,
                AB,
                AQ,
                AE,
                Ai,
                AD,
                Ao,
                AG,
                Aw,
                Ak,
                AS,
                Aa.ptr,
              );
            var AM = G()[Ay / 4 + 0],
              AK = D()[Ay / 8 + 1];
            return 0 === AM ? void 0 : AK;
          } finally {
            C.__wbindgen_add_to_stack_pointer(16);
          }
        }
        remove(A, I, g, o) {
          a(I, b),
            a(g, v),
            C.rawcolliderset_remove(this.ptr, A, I.ptr, g.ptr, o);
        }
        isHandleValid(A) {
          return 0 !== C.rawcolliderset_contains(this.ptr, A);
        }
        forEachColliderHandle(A) {
          try {
            C.rawcolliderset_forEachColliderHandle(this.ptr, J(A));
          } finally {
            o[c++] = void 0;
          }
        }
      };
      let t = class t {
        static __wrap(A) {
          let I = Object.create(t.prototype);
          return (I.ptr = A), I;
        }
        __destroy_into_raw() {
          let A = this.ptr;
          return (this.ptr = 0), A;
        }
        free() {
          let A = this.__destroy_into_raw();
          C.__wbg_rawcontactforceevent_free(A);
        }
        collider1() {
          return C.rawcharactercollision_handle(this.ptr);
        }
        collider2() {
          return C.rawcontactforceevent_collider2(this.ptr);
        }
        total_force() {
          let A = C.rawcontactforceevent_total_force(this.ptr);
          return QA.__wrap(A);
        }
        total_force_magnitude() {
          return C.rawcontactforceevent_total_force_magnitude(this.ptr);
        }
        max_force_direction() {
          let A = C.rawcontactforceevent_max_force_direction(this.ptr);
          return QA.__wrap(A);
        }
        max_force_magnitude() {
          return C.rawcontactforceevent_max_force_magnitude(this.ptr);
        }
      };
      let p = class p {
        static __wrap(A) {
          let I = Object.create(p.prototype);
          return (I.ptr = A), I;
        }
        __destroy_into_raw() {
          let A = this.ptr;
          return (this.ptr = 0), A;
        }
        free() {
          let A = this.__destroy_into_raw();
          C.__wbg_rawcontactmanifold_free(A);
        }
        normal() {
          let A = C.rawcontactmanifold_normal(this.ptr);
          return QA.__wrap(A);
        }
        local_n1() {
          let A = C.rawcontactmanifold_local_n1(this.ptr);
          return QA.__wrap(A);
        }
        local_n2() {
          let A = C.rawcontactmanifold_local_n2(this.ptr);
          return QA.__wrap(A);
        }
        subshape1() {
          return C.rawcontactmanifold_subshape1(this.ptr) >>> 0;
        }
        subshape2() {
          return C.rawcontactmanifold_subshape2(this.ptr) >>> 0;
        }
        num_contacts() {
          return C.rawcontactmanifold_num_contacts(this.ptr) >>> 0;
        }
        contact_local_p1(A) {
          let I = C.rawcontactmanifold_contact_local_p1(this.ptr, A);
          return 0 === I ? void 0 : QA.__wrap(I);
        }
        contact_local_p2(A) {
          let I = C.rawcontactmanifold_contact_local_p2(this.ptr, A);
          return 0 === I ? void 0 : QA.__wrap(I);
        }
        contact_dist(A) {
          return C.rawcontactmanifold_contact_dist(this.ptr, A);
        }
        contact_fid1(A) {
          return C.rawcontactmanifold_contact_fid1(this.ptr, A) >>> 0;
        }
        contact_fid2(A) {
          return C.rawcontactmanifold_contact_fid2(this.ptr, A) >>> 0;
        }
        contact_impulse(A) {
          return C.rawcontactmanifold_contact_impulse(this.ptr, A);
        }
        contact_tangent_impulse_x(A) {
          return C.rawcontactmanifold_contact_tangent_impulse_x(this.ptr, A);
        }
        contact_tangent_impulse_y(A) {
          return C.rawcontactmanifold_contact_tangent_impulse_y(this.ptr, A);
        }
        num_solver_contacts() {
          return C.rawcontactmanifold_num_solver_contacts(this.ptr) >>> 0;
        }
        solver_contact_point(A) {
          let I = C.rawcontactmanifold_solver_contact_point(this.ptr, A);
          return 0 === I ? void 0 : QA.__wrap(I);
        }
        solver_contact_dist(A) {
          return C.rawcontactmanifold_solver_contact_dist(this.ptr, A);
        }
        solver_contact_friction(A) {
          return C.rawcontactmanifold_solver_contact_friction(this.ptr, A);
        }
        solver_contact_restitution(A) {
          return C.rawcontactmanifold_solver_contact_restitution(this.ptr, A);
        }
        solver_contact_tangent_velocity(A) {
          let I = C.rawcontactmanifold_solver_contact_tangent_velocity(
            this.ptr,
            A,
          );
          return QA.__wrap(I);
        }
      };
      let e = class e {
        static __wrap(A) {
          let I = Object.create(e.prototype);
          return (I.ptr = A), I;
        }
        __destroy_into_raw() {
          let A = this.ptr;
          return (this.ptr = 0), A;
        }
        free() {
          let A = this.__destroy_into_raw();
          C.__wbg_rawcontactpair_free(A);
        }
        collider1() {
          return C.rawcontactpair_collider1(this.ptr);
        }
        collider2() {
          return C.rawcontactpair_collider2(this.ptr);
        }
        numContactManifolds() {
          return C.rawcontactpair_numContactManifolds(this.ptr) >>> 0;
        }
        contactManifold(A) {
          let I = C.rawcontactpair_contactManifold(this.ptr, A);
          return 0 === I ? void 0 : p.__wrap(I);
        }
      };
      let r = class r {
        static __wrap(A) {
          let I = Object.create(r.prototype);
          return (I.ptr = A), I;
        }
        __destroy_into_raw() {
          let A = this.ptr;
          return (this.ptr = 0), A;
        }
        free() {
          let A = this.__destroy_into_raw();
          C.__wbg_rawdebugrenderpipeline_free(A);
        }
        constructor() {
          let A = C.rawdebugrenderpipeline_new();
          return r.__wrap(A);
        }
        vertices() {
          return B(C.rawdebugrenderpipeline_vertices(this.ptr));
        }
        colors() {
          return B(C.rawdebugrenderpipeline_colors(this.ptr));
        }
        render(A, I, g, o, w) {
          a(A, v),
            a(I, l),
            a(g, n),
            a(o, j),
            a(w, x),
            C.rawdebugrenderpipeline_render(
              this.ptr,
              A.ptr,
              I.ptr,
              g.ptr,
              o.ptr,
              w.ptr,
            );
        }
      };
      let d = class d {
        static __wrap(A) {
          let I = Object.create(d.prototype);
          return (I.ptr = A), I;
        }
        __destroy_into_raw() {
          let A = this.ptr;
          return (this.ptr = 0), A;
        }
        free() {
          let A = this.__destroy_into_raw();
          C.__wbg_rawdeserializedworld_free(A);
        }
        takeGravity() {
          let A = C.rawdeserializedworld_takeGravity(this.ptr);
          return 0 === A ? void 0 : QA.__wrap(A);
        }
        takeIntegrationParameters() {
          let A = C.rawdeserializedworld_takeIntegrationParameters(this.ptr);
          return 0 === A ? void 0 : Z.__wrap(A);
        }
        takeIslandManager() {
          let A = C.rawdeserializedworld_takeIslandManager(this.ptr);
          return 0 === A ? void 0 : b.__wrap(A);
        }
        takeBroadPhase() {
          let A = C.rawdeserializedworld_takeBroadPhase(this.ptr);
          return 0 === A ? void 0 : Y.__wrap(A);
        }
        takeNarrowPhase() {
          let A = C.rawdeserializedworld_takeNarrowPhase(this.ptr);
          return 0 === A ? void 0 : x.__wrap(A);
        }
        takeBodies() {
          let A = C.rawdeserializedworld_takeBodies(this.ptr);
          return 0 === A ? void 0 : v.__wrap(A);
        }
        takeColliders() {
          let A = C.rawdeserializedworld_takeColliders(this.ptr);
          return 0 === A ? void 0 : l.__wrap(A);
        }
        takeImpulseJoints() {
          let A = C.rawdeserializedworld_takeImpulseJoints(this.ptr);
          return 0 === A ? void 0 : n.__wrap(A);
        }
        takeMultibodyJoints() {
          let A = C.rawdeserializedworld_takeMultibodyJoints(this.ptr);
          return 0 === A ? void 0 : j.__wrap(A);
        }
      };
      let T = class T {
        static __wrap(A) {
          let I = Object.create(T.prototype);
          return (I.ptr = A), I;
        }
        __destroy_into_raw() {
          let A = this.ptr;
          return (this.ptr = 0), A;
        }
        free() {
          let A = this.__destroy_into_raw();
          C.__wbg_raweventqueue_free(A);
        }
        constructor(A) {
          let I = C.raweventqueue_new(A);
          return T.__wrap(I);
        }
        drainCollisionEvents(A) {
          try {
            C.raweventqueue_drainCollisionEvents(this.ptr, J(A));
          } finally {
            o[c++] = void 0;
          }
        }
        drainContactForceEvents(A) {
          try {
            C.raweventqueue_drainContactForceEvents(this.ptr, J(A));
          } finally {
            o[c++] = void 0;
          }
        }
        clear() {
          C.raweventqueue_clear(this.ptr);
        }
      };
      let O = class O {
        static __wrap(A) {
          let I = Object.create(O.prototype);
          return (I.ptr = A), I;
        }
        __destroy_into_raw() {
          let A = this.ptr;
          return (this.ptr = 0), A;
        }
        free() {
          let A = this.__destroy_into_raw();
          C.__wbg_rawgenericjoint_free(A);
        }
        static spherical(A, I) {
          a(A, QA), a(I, QA);
          let g = C.rawgenericjoint_spherical(A.ptr, I.ptr);
          return O.__wrap(g);
        }
        static prismatic(A, I, g, o, w, k) {
          a(A, QA), a(I, QA), a(g, QA);
          let M = C.rawgenericjoint_prismatic(A.ptr, I.ptr, g.ptr, o, w, k);
          return 0 === M ? void 0 : O.__wrap(M);
        }
        static fixed(A, I, g, o) {
          a(A, QA), a(I, _), a(g, QA), a(o, _);
          let w = C.rawgenericjoint_fixed(A.ptr, I.ptr, g.ptr, o.ptr);
          return O.__wrap(w);
        }
        static revolute(A, I, g) {
          a(A, QA), a(I, QA), a(g, QA);
          let o = C.rawgenericjoint_revolute(A.ptr, I.ptr, g.ptr);
          return 0 === o ? void 0 : O.__wrap(o);
        }
      };
      let n = class n {
        static __wrap(A) {
          let I = Object.create(n.prototype);
          return (I.ptr = A), I;
        }
        __destroy_into_raw() {
          let A = this.ptr;
          return (this.ptr = 0), A;
        }
        free() {
          let A = this.__destroy_into_raw();
          C.__wbg_rawimpulsejointset_free(A);
        }
        jointType(A) {
          return C.rawimpulsejointset_jointType(this.ptr, A) >>> 0;
        }
        jointBodyHandle1(A) {
          return C.rawimpulsejointset_jointBodyHandle1(this.ptr, A);
        }
        jointBodyHandle2(A) {
          return C.rawimpulsejointset_jointBodyHandle2(this.ptr, A);
        }
        jointFrameX1(A) {
          let I = C.rawimpulsejointset_jointFrameX1(this.ptr, A);
          return _.__wrap(I);
        }
        jointFrameX2(A) {
          let I = C.rawimpulsejointset_jointFrameX2(this.ptr, A);
          return _.__wrap(I);
        }
        jointAnchor1(A) {
          let I = C.rawimpulsejointset_jointAnchor1(this.ptr, A);
          return QA.__wrap(I);
        }
        jointAnchor2(A) {
          let I = C.rawimpulsejointset_jointAnchor2(this.ptr, A);
          return QA.__wrap(I);
        }
        jointSetAnchor1(A, I) {
          a(I, QA), C.rawimpulsejointset_jointSetAnchor1(this.ptr, A, I.ptr);
        }
        jointSetAnchor2(A, I) {
          a(I, QA), C.rawimpulsejointset_jointSetAnchor2(this.ptr, A, I.ptr);
        }
        jointContactsEnabled(A) {
          return 0 !== C.rawimpulsejointset_jointContactsEnabled(this.ptr, A);
        }
        jointSetContactsEnabled(A, I) {
          C.rawimpulsejointset_jointSetContactsEnabled(this.ptr, A, I);
        }
        jointLimitsEnabled(A, I) {
          return 0 !== C.rawimpulsejointset_jointLimitsEnabled(this.ptr, A, I);
        }
        jointLimitsMin(A, I) {
          return C.rawimpulsejointset_jointLimitsMin(this.ptr, A, I);
        }
        jointLimitsMax(A, I) {
          return C.rawimpulsejointset_jointLimitsMax(this.ptr, A, I);
        }
        jointSetLimits(A, I, g, o) {
          C.rawimpulsejointset_jointSetLimits(this.ptr, A, I, g, o);
        }
        jointConfigureMotorModel(A, I, g) {
          C.rawimpulsejointset_jointConfigureMotorModel(this.ptr, A, I, g);
        }
        jointConfigureMotorVelocity(A, I, g, o) {
          C.rawimpulsejointset_jointConfigureMotorVelocity(
            this.ptr,
            A,
            I,
            g,
            o,
          );
        }
        jointConfigureMotorPosition(A, I, g, o, w) {
          C.rawimpulsejointset_jointConfigureMotorPosition(
            this.ptr,
            A,
            I,
            g,
            o,
            w,
          );
        }
        jointConfigureMotor(A, I, g, o, w, k) {
          C.rawimpulsejointset_jointConfigureMotor(this.ptr, A, I, g, o, w, k);
        }
        constructor() {
          let A = C.rawimpulsejointset_new();
          return n.__wrap(A);
        }
        createJoint(A, I, g, o) {
          return (
            a(A, O), C.rawimpulsejointset_createJoint(this.ptr, A.ptr, I, g, o)
          );
        }
        remove(A, I) {
          C.rawimpulsejointset_remove(this.ptr, A, I);
        }
        len() {
          return C.rawimpulsejointset_len(this.ptr) >>> 0;
        }
        contains(A) {
          return 0 !== C.rawimpulsejointset_contains(this.ptr, A);
        }
        forEachJointHandle(A) {
          try {
            C.rawimpulsejointset_forEachJointHandle(this.ptr, J(A));
          } finally {
            o[c++] = void 0;
          }
        }
        forEachJointAttachedToRigidBody(A, I) {
          try {
            C.rawimpulsejointset_forEachJointAttachedToRigidBody(
              this.ptr,
              A,
              J(I),
            );
          } finally {
            o[c++] = void 0;
          }
        }
      };
      let Z = class Z {
        static __wrap(A) {
          let I = Object.create(Z.prototype);
          return (I.ptr = A), I;
        }
        __destroy_into_raw() {
          let A = this.ptr;
          return (this.ptr = 0), A;
        }
        free() {
          let A = this.__destroy_into_raw();
          C.__wbg_rawintegrationparameters_free(A);
        }
        constructor() {
          let A = C.rawintegrationparameters_new();
          return Z.__wrap(A);
        }
        get dt() {
          return C.rawintegrationparameters_dt(this.ptr);
        }
        get erp() {
          return C.rawcharactercollision_toi(this.ptr);
        }
        get allowedLinearError() {
          return C.rawintegrationparameters_allowedLinearError(this.ptr);
        }
        get predictionDistance() {
          return C.rawintegrationparameters_predictionDistance(this.ptr);
        }
        get maxVelocityIterations() {
          return (
            C.rawintegrationparameters_maxVelocityIterations(this.ptr) >>> 0
          );
        }
        get maxVelocityFrictionIterations() {
          return (
            C.rawintegrationparameters_maxVelocityFrictionIterations(
              this.ptr,
            ) >>> 0
          );
        }
        get maxStabilizationIterations() {
          return (
            C.rawintegrationparameters_maxStabilizationIterations(this.ptr) >>>
            0
          );
        }
        get minIslandSize() {
          return C.rawintegrationparameters_minIslandSize(this.ptr) >>> 0;
        }
        get maxCcdSubsteps() {
          return C.rawintegrationparameters_maxCcdSubsteps(this.ptr) >>> 0;
        }
        set dt(A) {
          C.rawintegrationparameters_set_dt(this.ptr, A);
        }
        set erp(A) {
          C.rawintegrationparameters_set_erp(this.ptr, A);
        }
        set allowedLinearError(A) {
          C.rawintegrationparameters_set_allowedLinearError(this.ptr, A);
        }
        set predictionDistance(A) {
          C.rawintegrationparameters_set_predictionDistance(this.ptr, A);
        }
        set maxVelocityIterations(A) {
          C.rawintegrationparameters_set_maxVelocityIterations(this.ptr, A);
        }
        set maxVelocityFrictionIterations(A) {
          C.rawintegrationparameters_set_maxVelocityFrictionIterations(
            this.ptr,
            A,
          );
        }
        set maxStabilizationIterations(A) {
          C.rawintegrationparameters_set_maxStabilizationIterations(
            this.ptr,
            A,
          );
        }
        set minIslandSize(A) {
          C.rawintegrationparameters_set_minIslandSize(this.ptr, A);
        }
        set maxCcdSubsteps(A) {
          C.rawintegrationparameters_set_maxCcdSubsteps(this.ptr, A);
        }
      };
      let b = class b {
        static __wrap(A) {
          let I = Object.create(b.prototype);
          return (I.ptr = A), I;
        }
        __destroy_into_raw() {
          let A = this.ptr;
          return (this.ptr = 0), A;
        }
        free() {
          let A = this.__destroy_into_raw();
          C.__wbg_rawislandmanager_free(A);
        }
        constructor() {
          let A = C.rawislandmanager_new();
          return b.__wrap(A);
        }
        forEachActiveRigidBodyHandle(A) {
          try {
            C.rawislandmanager_forEachActiveRigidBodyHandle(this.ptr, J(A));
          } finally {
            o[c++] = void 0;
          }
        }
      };
      let W = class W {
        static __wrap(A) {
          let I = Object.create(W.prototype);
          return (I.ptr = A), I;
        }
        __destroy_into_raw() {
          let A = this.ptr;
          return (this.ptr = 0), A;
        }
        free() {
          let A = this.__destroy_into_raw();
          C.__wbg_rawkinematiccharactercontroller_free(A);
        }
        constructor(A) {
          let I = C.rawkinematiccharactercontroller_new(A);
          return W.__wrap(I);
        }
        up() {
          let A = C.rawkinematiccharactercontroller_up(this.ptr);
          return QA.__wrap(A);
        }
        setUp(A) {
          a(A, QA), C.rawkinematiccharactercontroller_setUp(this.ptr, A.ptr);
        }
        offset() {
          return C.rawkinematiccharactercontroller_offset(this.ptr);
        }
        setOffset(A) {
          C.rawkinematiccharactercontroller_setOffset(this.ptr, A);
        }
        slideEnabled() {
          return 0 !== C.rawkinematiccharactercontroller_slideEnabled(this.ptr);
        }
        setSlideEnabled(A) {
          C.rawkinematiccharactercontroller_setSlideEnabled(this.ptr, A);
        }
        autostepMaxHeight() {
          try {
            let g = C.__wbindgen_add_to_stack_pointer(-16);
            C.rawkinematiccharactercontroller_autostepMaxHeight(g, this.ptr);
            var A = G()[g / 4 + 0],
              I = K()[g / 4 + 1];
            return 0 === A ? void 0 : I;
          } finally {
            C.__wbindgen_add_to_stack_pointer(16);
          }
        }
        autostepMinWidth() {
          try {
            let g = C.__wbindgen_add_to_stack_pointer(-16);
            C.rawkinematiccharactercontroller_autostepMinWidth(g, this.ptr);
            var A = G()[g / 4 + 0],
              I = K()[g / 4 + 1];
            return 0 === A ? void 0 : I;
          } finally {
            C.__wbindgen_add_to_stack_pointer(16);
          }
        }
        autostepIncludesDynamicBodies() {
          let A =
            C.rawkinematiccharactercontroller_autostepIncludesDynamicBodies(
              this.ptr,
            );
          return 16777215 === A ? void 0 : 0 !== A;
        }
        autostepEnabled() {
          return (
            0 !== C.rawkinematiccharactercontroller_autostepEnabled(this.ptr)
          );
        }
        enableAutostep(A, I, g) {
          C.rawkinematiccharactercontroller_enableAutostep(this.ptr, A, I, g);
        }
        disableAutostep() {
          C.rawkinematiccharactercontroller_disableAutostep(this.ptr);
        }
        maxSlopeClimbAngle() {
          return C.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.ptr);
        }
        setMaxSlopeClimbAngle(A) {
          C.rawkinematiccharactercontroller_setMaxSlopeClimbAngle(this.ptr, A);
        }
        minSlopeSlideAngle() {
          return C.rawkinematiccharactercontroller_minSlopeSlideAngle(this.ptr);
        }
        setMinSlopeSlideAngle(A) {
          C.rawkinematiccharactercontroller_setMinSlopeSlideAngle(this.ptr, A);
        }
        snapToGroundDistance() {
          try {
            let g = C.__wbindgen_add_to_stack_pointer(-16);
            C.rawkinematiccharactercontroller_snapToGroundDistance(g, this.ptr);
            var A = G()[g / 4 + 0],
              I = K()[g / 4 + 1];
            return 0 === A ? void 0 : I;
          } finally {
            C.__wbindgen_add_to_stack_pointer(16);
          }
        }
        enableSnapToGround(A) {
          C.rawkinematiccharactercontroller_enableSnapToGround(this.ptr, A);
        }
        disableSnapToGround() {
          C.rawkinematiccharactercontroller_disableSnapToGround(this.ptr);
        }
        snapToGroundEnabled() {
          return (
            0 !==
            C.rawkinematiccharactercontroller_snapToGroundEnabled(this.ptr)
          );
        }
        computeColliderMovement(A, I, g, w, k, M, y, h, F, Ag, AC) {
          try {
            a(I, v),
              a(g, l),
              a(w, V),
              a(M, QA),
              C.rawkinematiccharactercontroller_computeColliderMovement(
                this.ptr,
                A,
                I.ptr,
                g.ptr,
                w.ptr,
                k,
                M.ptr,
                y,
                !E(h),
                E(h) ? 0 : h,
                F,
                !E(Ag),
                E(Ag) ? 0 : Ag,
                J(AC),
              );
          } finally {
            o[c++] = void 0;
          }
        }
        computedMovement() {
          let A = C.rawkinematiccharactercontroller_computedMovement(this.ptr);
          return QA.__wrap(A);
        }
        computedGrounded() {
          return (
            0 !== C.rawkinematiccharactercontroller_computedGrounded(this.ptr)
          );
        }
        numComputedCollisions() {
          return (
            C.rawkinematiccharactercontroller_numComputedCollisions(
              this.ptr,
            ) >>> 0
          );
        }
        computedCollision(A, I) {
          return (
            a(I, H),
            0 !==
              C.rawkinematiccharactercontroller_computedCollision(
                this.ptr,
                A,
                I.ptr,
              )
          );
        }
      };
      let j = class j {
        static __wrap(A) {
          let I = Object.create(j.prototype);
          return (I.ptr = A), I;
        }
        __destroy_into_raw() {
          let A = this.ptr;
          return (this.ptr = 0), A;
        }
        free() {
          let A = this.__destroy_into_raw();
          C.__wbg_rawmultibodyjointset_free(A);
        }
        jointType(A) {
          return C.rawmultibodyjointset_jointType(this.ptr, A) >>> 0;
        }
        jointFrameX1(A) {
          let I = C.rawmultibodyjointset_jointFrameX1(this.ptr, A);
          return _.__wrap(I);
        }
        jointFrameX2(A) {
          let I = C.rawmultibodyjointset_jointFrameX2(this.ptr, A);
          return _.__wrap(I);
        }
        jointAnchor1(A) {
          let I = C.rawmultibodyjointset_jointAnchor1(this.ptr, A);
          return QA.__wrap(I);
        }
        jointAnchor2(A) {
          let I = C.rawmultibodyjointset_jointAnchor2(this.ptr, A);
          return QA.__wrap(I);
        }
        jointContactsEnabled(A) {
          return 0 !== C.rawmultibodyjointset_jointContactsEnabled(this.ptr, A);
        }
        jointSetContactsEnabled(A, I) {
          C.rawmultibodyjointset_jointSetContactsEnabled(this.ptr, A, I);
        }
        jointLimitsEnabled(A, I) {
          return (
            0 !== C.rawmultibodyjointset_jointLimitsEnabled(this.ptr, A, I)
          );
        }
        jointLimitsMin(A, I) {
          return C.rawmultibodyjointset_jointLimitsMin(this.ptr, A, I);
        }
        jointLimitsMax(A, I) {
          return C.rawmultibodyjointset_jointLimitsMax(this.ptr, A, I);
        }
        constructor() {
          let A = C.rawmultibodyjointset_new();
          return j.__wrap(A);
        }
        createJoint(A, I, g, o) {
          return (
            a(A, O),
            C.rawmultibodyjointset_createJoint(this.ptr, A.ptr, I, g, o)
          );
        }
        remove(A, I) {
          C.rawmultibodyjointset_remove(this.ptr, A, I);
        }
        contains(A) {
          return 0 !== C.rawmultibodyjointset_contains(this.ptr, A);
        }
        forEachJointHandle(A) {
          try {
            C.rawmultibodyjointset_forEachJointHandle(this.ptr, J(A));
          } finally {
            o[c++] = void 0;
          }
        }
        forEachJointAttachedToRigidBody(A, I) {
          try {
            C.rawmultibodyjointset_forEachJointAttachedToRigidBody(
              this.ptr,
              A,
              J(I),
            );
          } finally {
            o[c++] = void 0;
          }
        }
      };
      let x = class x {
        static __wrap(A) {
          let I = Object.create(x.prototype);
          return (I.ptr = A), I;
        }
        __destroy_into_raw() {
          let A = this.ptr;
          return (this.ptr = 0), A;
        }
        free() {
          let A = this.__destroy_into_raw();
          C.__wbg_rawnarrowphase_free(A);
        }
        constructor() {
          let A = C.rawnarrowphase_new();
          return x.__wrap(A);
        }
        contacts_with(A, I) {
          C.rawnarrowphase_contacts_with(this.ptr, A, Q(I));
        }
        contact_pair(A, I) {
          let g = C.rawnarrowphase_contact_pair(this.ptr, A, I);
          return 0 === g ? void 0 : e.__wrap(g);
        }
        intersections_with(A, I) {
          C.rawnarrowphase_intersections_with(this.ptr, A, Q(I));
        }
        intersection_pair(A, I) {
          return 0 !== C.rawnarrowphase_intersection_pair(this.ptr, A, I);
        }
      };
      let f = class f {
        static __wrap(A) {
          let I = Object.create(f.prototype);
          return (I.ptr = A), I;
        }
        __destroy_into_raw() {
          let A = this.ptr;
          return (this.ptr = 0), A;
        }
        free() {
          let A = this.__destroy_into_raw();
          C.__wbg_rawphysicspipeline_free(A);
        }
        constructor() {
          let A = C.rawphysicspipeline_new();
          return f.__wrap(A);
        }
        step(A, I, g, o, w, k, M, y, h, F) {
          a(A, QA),
            a(I, Z),
            a(g, b),
            a(o, Y),
            a(w, x),
            a(k, v),
            a(M, l),
            a(y, n),
            a(h, j),
            a(F, L),
            C.rawphysicspipeline_step(
              this.ptr,
              A.ptr,
              I.ptr,
              g.ptr,
              o.ptr,
              w.ptr,
              k.ptr,
              M.ptr,
              y.ptr,
              h.ptr,
              F.ptr,
            );
        }
        stepWithEvents(A, I, g, o, w, k, M, y, h, F, c, Ag, AC, AB) {
          a(A, QA),
            a(I, Z),
            a(g, b),
            a(o, Y),
            a(w, x),
            a(k, v),
            a(M, l),
            a(y, n),
            a(h, j),
            a(F, L),
            a(c, T),
            C.rawphysicspipeline_stepWithEvents(
              this.ptr,
              A.ptr,
              I.ptr,
              g.ptr,
              o.ptr,
              w.ptr,
              k.ptr,
              M.ptr,
              y.ptr,
              h.ptr,
              F.ptr,
              c.ptr,
              Q(Ag),
              Q(AC),
              Q(AB),
            );
        }
      };
      let m = class m {
        static __wrap(A) {
          let I = Object.create(m.prototype);
          return (I.ptr = A), I;
        }
        __destroy_into_raw() {
          let A = this.ptr;
          return (this.ptr = 0), A;
        }
        free() {
          let A = this.__destroy_into_raw();
          C.__wbg_rawpointcolliderprojection_free(A);
        }
        colliderHandle() {
          return C.rawpointcolliderprojection_colliderHandle(this.ptr);
        }
        point() {
          let A = C.rawkinematiccharactercontroller_computedMovement(this.ptr);
          return QA.__wrap(A);
        }
        isInside() {
          return (
            0 !== C.rawkinematiccharactercontroller_computedGrounded(this.ptr)
          );
        }
        featureType() {
          return C.rawpointcolliderprojection_featureType(this.ptr) >>> 0;
        }
        featureId() {
          try {
            let g = C.__wbindgen_add_to_stack_pointer(-16);
            C.rawpointcolliderprojection_featureId(g, this.ptr);
            var A = G()[g / 4 + 0],
              I = G()[g / 4 + 1];
            return 0 === A ? void 0 : I >>> 0;
          } finally {
            C.__wbindgen_add_to_stack_pointer(16);
          }
        }
      };
      let X = class X {
        static __wrap(A) {
          let I = Object.create(X.prototype);
          return (I.ptr = A), I;
        }
        __destroy_into_raw() {
          let A = this.ptr;
          return (this.ptr = 0), A;
        }
        free() {
          let A = this.__destroy_into_raw();
          C.__wbg_rawpointprojection_free(A);
        }
        point() {
          let A = C.rawkinematiccharactercontroller_computedMovement(this.ptr);
          return QA.__wrap(A);
        }
        isInside() {
          return (
            0 !== C.rawkinematiccharactercontroller_computedGrounded(this.ptr)
          );
        }
      };
      let V = class V {
        static __wrap(A) {
          let I = Object.create(V.prototype);
          return (I.ptr = A), I;
        }
        __destroy_into_raw() {
          let A = this.ptr;
          return (this.ptr = 0), A;
        }
        free() {
          let A = this.__destroy_into_raw();
          C.__wbg_rawquerypipeline_free(A);
        }
        constructor() {
          let A = C.rawquerypipeline_new();
          return V.__wrap(A);
        }
        update(A, I) {
          a(A, v), a(I, l), C.rawquerypipeline_update(this.ptr, A.ptr, I.ptr);
        }
        castRay(A, I, g, w, k, M, y, h, F, Ag, AC) {
          try {
            a(A, v), a(I, l), a(g, QA), a(w, QA);
            let o = C.rawquerypipeline_castRay(
              this.ptr,
              A.ptr,
              I.ptr,
              g.ptr,
              w.ptr,
              k,
              M,
              y,
              !E(h),
              E(h) ? 0 : h,
              !E(F),
              E(F) ? 0 : F,
              !E(Ag),
              E(Ag) ? 0 : Ag,
              J(AC),
            );
            return 0 === o ? void 0 : z.__wrap(o);
          } finally {
            o[c++] = void 0;
          }
        }
        castRayAndGetNormal(A, I, g, w, k, M, y, h, F, Ag, AC) {
          try {
            a(A, v), a(I, l), a(g, QA), a(w, QA);
            let o = C.rawquerypipeline_castRayAndGetNormal(
              this.ptr,
              A.ptr,
              I.ptr,
              g.ptr,
              w.ptr,
              k,
              M,
              y,
              !E(h),
              E(h) ? 0 : h,
              !E(F),
              E(F) ? 0 : F,
              !E(Ag),
              E(Ag) ? 0 : Ag,
              J(AC),
            );
            return 0 === o ? void 0 : P.__wrap(o);
          } finally {
            o[c++] = void 0;
          }
        }
        intersectionsWithRay(A, I, g, w, k, M, y, h, F, Ag, AC, AB) {
          try {
            a(A, v),
              a(I, l),
              a(g, QA),
              a(w, QA),
              C.rawquerypipeline_intersectionsWithRay(
                this.ptr,
                A.ptr,
                I.ptr,
                g.ptr,
                w.ptr,
                k,
                M,
                J(y),
                h,
                !E(F),
                E(F) ? 0 : F,
                !E(Ag),
                E(Ag) ? 0 : Ag,
                !E(AC),
                E(AC) ? 0 : AC,
                J(AB),
              );
          } finally {
            (o[c++] = void 0), (o[c++] = void 0);
          }
        }
        intersectionWithShape(A, I, g, w, k, M, y, h, F, Ag) {
          try {
            let o = C.__wbindgen_add_to_stack_pointer(-16);
            a(A, v),
              a(I, l),
              a(g, QA),
              a(w, _),
              a(k, IA),
              C.rawquerypipeline_intersectionWithShape(
                o,
                this.ptr,
                A.ptr,
                I.ptr,
                g.ptr,
                w.ptr,
                k.ptr,
                M,
                !E(y),
                E(y) ? 0 : y,
                !E(h),
                E(h) ? 0 : h,
                !E(F),
                E(F) ? 0 : F,
                J(Ag),
              );
            var AC = G()[o / 4 + 0],
              AB = D()[o / 8 + 1];
            return 0 === AC ? void 0 : AB;
          } finally {
            C.__wbindgen_add_to_stack_pointer(16), (o[c++] = void 0);
          }
        }
        projectPoint(A, I, g, w, k, M, y, h, F) {
          try {
            a(A, v), a(I, l), a(g, QA);
            let o = C.rawquerypipeline_projectPoint(
              this.ptr,
              A.ptr,
              I.ptr,
              g.ptr,
              w,
              k,
              !E(M),
              E(M) ? 0 : M,
              !E(y),
              E(y) ? 0 : y,
              !E(h),
              E(h) ? 0 : h,
              J(F),
            );
            return 0 === o ? void 0 : m.__wrap(o);
          } finally {
            o[c++] = void 0;
          }
        }
        projectPointAndGetFeature(A, I, g, w, k, M, y, h) {
          try {
            a(A, v), a(I, l), a(g, QA);
            let o = C.rawquerypipeline_projectPointAndGetFeature(
              this.ptr,
              A.ptr,
              I.ptr,
              g.ptr,
              w,
              !E(k),
              E(k) ? 0 : k,
              !E(M),
              E(M) ? 0 : M,
              !E(y),
              E(y) ? 0 : y,
              J(h),
            );
            return 0 === o ? void 0 : m.__wrap(o);
          } finally {
            o[c++] = void 0;
          }
        }
        intersectionsWithPoint(A, I, g, w, k, M, y, h, F) {
          try {
            a(A, v),
              a(I, l),
              a(g, QA),
              C.rawquerypipeline_intersectionsWithPoint(
                this.ptr,
                A.ptr,
                I.ptr,
                g.ptr,
                J(w),
                k,
                !E(M),
                E(M) ? 0 : M,
                !E(y),
                E(y) ? 0 : y,
                !E(h),
                E(h) ? 0 : h,
                J(F),
              );
          } finally {
            (o[c++] = void 0), (o[c++] = void 0);
          }
        }
        castShape(A, I, g, w, k, M, y, h, F, Ag, AC, AB, AQ) {
          try {
            a(A, v), a(I, l), a(g, QA), a(w, _), a(k, QA), a(M, IA);
            let o = C.rawquerypipeline_castShape(
              this.ptr,
              A.ptr,
              I.ptr,
              g.ptr,
              w.ptr,
              k.ptr,
              M.ptr,
              y,
              h,
              F,
              !E(Ag),
              E(Ag) ? 0 : Ag,
              !E(AC),
              E(AC) ? 0 : AC,
              !E(AB),
              E(AB) ? 0 : AB,
              J(AQ),
            );
            return 0 === o ? void 0 : gA.__wrap(o);
          } finally {
            o[c++] = void 0;
          }
        }
        intersectionsWithShape(A, I, g, w, k, M, y, h, F, Ag, AC) {
          try {
            a(A, v),
              a(I, l),
              a(g, QA),
              a(w, _),
              a(k, IA),
              C.rawquerypipeline_intersectionsWithShape(
                this.ptr,
                A.ptr,
                I.ptr,
                g.ptr,
                w.ptr,
                k.ptr,
                J(M),
                y,
                !E(h),
                E(h) ? 0 : h,
                !E(F),
                E(F) ? 0 : F,
                !E(Ag),
                E(Ag) ? 0 : Ag,
                J(AC),
              );
          } finally {
            (o[c++] = void 0), (o[c++] = void 0);
          }
        }
        collidersWithAabbIntersectingAabb(A, I, g) {
          try {
            a(A, QA),
              a(I, QA),
              C.rawquerypipeline_collidersWithAabbIntersectingAabb(
                this.ptr,
                A.ptr,
                I.ptr,
                J(g),
              );
          } finally {
            o[c++] = void 0;
          }
        }
      };
      let P = class P {
        static __wrap(A) {
          let I = Object.create(P.prototype);
          return (I.ptr = A), I;
        }
        __destroy_into_raw() {
          let A = this.ptr;
          return (this.ptr = 0), A;
        }
        free() {
          let A = this.__destroy_into_raw();
          C.__wbg_rawraycolliderintersection_free(A);
        }
        colliderHandle() {
          return C.rawcharactercollision_handle(this.ptr);
        }
        normal() {
          let A = C.rawraycolliderintersection_normal(this.ptr);
          return QA.__wrap(A);
        }
        toi() {
          return C.rawraycolliderintersection_toi(this.ptr);
        }
        featureType() {
          return C.rawraycolliderintersection_featureType(this.ptr) >>> 0;
        }
        featureId() {
          try {
            let g = C.__wbindgen_add_to_stack_pointer(-16);
            C.rawraycolliderintersection_featureId(g, this.ptr);
            var A = G()[g / 4 + 0],
              I = G()[g / 4 + 1];
            return 0 === A ? void 0 : I >>> 0;
          } finally {
            C.__wbindgen_add_to_stack_pointer(16);
          }
        }
      };
      let z = class z {
        static __wrap(A) {
          let I = Object.create(z.prototype);
          return (I.ptr = A), I;
        }
        __destroy_into_raw() {
          let A = this.ptr;
          return (this.ptr = 0), A;
        }
        free() {
          let A = this.__destroy_into_raw();
          C.__wbg_rawraycollidertoi_free(A);
        }
        colliderHandle() {
          return C.rawcharactercollision_handle(this.ptr);
        }
        toi() {
          return C.rawcharactercollision_toi(this.ptr);
        }
      };
      let u = class u {
        static __wrap(A) {
          let I = Object.create(u.prototype);
          return (I.ptr = A), I;
        }
        __destroy_into_raw() {
          let A = this.ptr;
          return (this.ptr = 0), A;
        }
        free() {
          let A = this.__destroy_into_raw();
          C.__wbg_rawrayintersection_free(A);
        }
        normal() {
          let A = C.rawcharactercollision_worldWitness1(this.ptr);
          return QA.__wrap(A);
        }
        toi() {
          return C.rawcharactercollision_toi(this.ptr);
        }
        featureType() {
          return C.rawrayintersection_featureType(this.ptr) >>> 0;
        }
        featureId() {
          try {
            let g = C.__wbindgen_add_to_stack_pointer(-16);
            C.rawrayintersection_featureId(g, this.ptr);
            var A = G()[g / 4 + 0],
              I = G()[g / 4 + 1];
            return 0 === A ? void 0 : I >>> 0;
          } finally {
            C.__wbindgen_add_to_stack_pointer(16);
          }
        }
      };
      let v = class v {
        static __wrap(A) {
          let I = Object.create(v.prototype);
          return (I.ptr = A), I;
        }
        __destroy_into_raw() {
          let A = this.ptr;
          return (this.ptr = 0), A;
        }
        free() {
          let A = this.__destroy_into_raw();
          C.__wbg_rawrigidbodyset_free(A);
        }
        rbTranslation(A) {
          let I = C.rawrigidbodyset_rbTranslation(this.ptr, A);
          return QA.__wrap(I);
        }
        rbRotation(A) {
          let I = C.rawrigidbodyset_rbRotation(this.ptr, A);
          return _.__wrap(I);
        }
        rbSleep(A) {
          C.rawrigidbodyset_rbSleep(this.ptr, A);
        }
        rbIsSleeping(A) {
          return 0 !== C.rawrigidbodyset_rbIsSleeping(this.ptr, A);
        }
        rbIsMoving(A) {
          return 0 !== C.rawrigidbodyset_rbIsMoving(this.ptr, A);
        }
        rbNextTranslation(A) {
          let I = C.rawrigidbodyset_rbNextTranslation(this.ptr, A);
          return QA.__wrap(I);
        }
        rbNextRotation(A) {
          let I = C.rawrigidbodyset_rbNextRotation(this.ptr, A);
          return _.__wrap(I);
        }
        rbSetTranslation(A, I, g, o, w) {
          C.rawrigidbodyset_rbSetTranslation(this.ptr, A, I, g, o, w);
        }
        rbSetRotation(A, I, g, o, w, k) {
          C.rawrigidbodyset_rbSetRotation(this.ptr, A, I, g, o, w, k);
        }
        rbSetLinvel(A, I, g) {
          a(I, QA), C.rawrigidbodyset_rbSetLinvel(this.ptr, A, I.ptr, g);
        }
        rbSetAngvel(A, I, g) {
          a(I, QA), C.rawrigidbodyset_rbSetAngvel(this.ptr, A, I.ptr, g);
        }
        rbSetNextKinematicTranslation(A, I, g, o) {
          C.rawrigidbodyset_rbSetNextKinematicTranslation(this.ptr, A, I, g, o);
        }
        rbSetNextKinematicRotation(A, I, g, o, w) {
          C.rawrigidbodyset_rbSetNextKinematicRotation(this.ptr, A, I, g, o, w);
        }
        rbRecomputeMassPropertiesFromColliders(A, I) {
          a(I, l),
            C.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(
              this.ptr,
              A,
              I.ptr,
            );
        }
        rbSetAdditionalMass(A, I, g) {
          C.rawrigidbodyset_rbSetAdditionalMass(this.ptr, A, I, g);
        }
        rbSetAdditionalMassProperties(A, I, g, o, w, k) {
          a(g, QA),
            a(o, QA),
            a(w, _),
            C.rawrigidbodyset_rbSetAdditionalMassProperties(
              this.ptr,
              A,
              I,
              g.ptr,
              o.ptr,
              w.ptr,
              k,
            );
        }
        rbLinvel(A) {
          let I = C.rawrigidbodyset_rbLinvel(this.ptr, A);
          return QA.__wrap(I);
        }
        rbAngvel(A) {
          let I = C.rawrigidbodyset_rbAngvel(this.ptr, A);
          return QA.__wrap(I);
        }
        rbLockTranslations(A, I, g) {
          C.rawrigidbodyset_rbLockTranslations(this.ptr, A, I, g);
        }
        rbSetEnabledTranslations(A, I, g, o, w) {
          C.rawrigidbodyset_rbSetEnabledTranslations(this.ptr, A, I, g, o, w);
        }
        rbLockRotations(A, I, g) {
          C.rawrigidbodyset_rbLockRotations(this.ptr, A, I, g);
        }
        rbSetEnabledRotations(A, I, g, o, w) {
          C.rawrigidbodyset_rbSetEnabledRotations(this.ptr, A, I, g, o, w);
        }
        rbDominanceGroup(A) {
          return C.rawrigidbodyset_rbDominanceGroup(this.ptr, A);
        }
        rbSetDominanceGroup(A, I) {
          C.rawrigidbodyset_rbSetDominanceGroup(this.ptr, A, I);
        }
        rbEnableCcd(A, I) {
          C.rawrigidbodyset_rbEnableCcd(this.ptr, A, I);
        }
        rbMass(A) {
          return C.rawrigidbodyset_rbMass(this.ptr, A);
        }
        rbInvMass(A) {
          return C.rawrigidbodyset_rbInvMass(this.ptr, A);
        }
        rbEffectiveInvMass(A) {
          let I = C.rawrigidbodyset_rbEffectiveInvMass(this.ptr, A);
          return QA.__wrap(I);
        }
        rbLocalCom(A) {
          let I = C.rawrigidbodyset_rbLocalCom(this.ptr, A);
          return QA.__wrap(I);
        }
        rbWorldCom(A) {
          let I = C.rawrigidbodyset_rbWorldCom(this.ptr, A);
          return QA.__wrap(I);
        }
        rbInvPrincipalInertiaSqrt(A) {
          let I = C.rawrigidbodyset_rbInvPrincipalInertiaSqrt(this.ptr, A);
          return QA.__wrap(I);
        }
        rbPrincipalInertiaLocalFrame(A) {
          let I = C.rawrigidbodyset_rbPrincipalInertiaLocalFrame(this.ptr, A);
          return _.__wrap(I);
        }
        rbPrincipalInertia(A) {
          let I = C.rawrigidbodyset_rbPrincipalInertia(this.ptr, A);
          return QA.__wrap(I);
        }
        rbEffectiveWorldInvInertiaSqrt(A) {
          let I = C.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt(this.ptr, A);
          return $.__wrap(I);
        }
        rbEffectiveAngularInertia(A) {
          let I = C.rawrigidbodyset_rbEffectiveAngularInertia(this.ptr, A);
          return $.__wrap(I);
        }
        rbWakeUp(A) {
          C.rawrigidbodyset_rbWakeUp(this.ptr, A);
        }
        rbIsCcdEnabled(A) {
          return 0 !== C.rawrigidbodyset_rbIsCcdEnabled(this.ptr, A);
        }
        rbNumColliders(A) {
          return C.rawrigidbodyset_rbNumColliders(this.ptr, A) >>> 0;
        }
        rbCollider(A, I) {
          return C.rawrigidbodyset_rbCollider(this.ptr, A, I);
        }
        rbBodyType(A) {
          return C.rawrigidbodyset_rbBodyType(this.ptr, A) >>> 0;
        }
        rbSetBodyType(A, I, g) {
          C.rawrigidbodyset_rbSetBodyType(this.ptr, A, I, g);
        }
        rbIsFixed(A) {
          return 0 !== C.rawrigidbodyset_rbIsFixed(this.ptr, A);
        }
        rbIsKinematic(A) {
          return 0 !== C.rawrigidbodyset_rbIsKinematic(this.ptr, A);
        }
        rbIsDynamic(A) {
          return 0 !== C.rawrigidbodyset_rbIsDynamic(this.ptr, A);
        }
        rbLinearDamping(A) {
          return C.rawrigidbodyset_rbLinearDamping(this.ptr, A);
        }
        rbAngularDamping(A) {
          return C.rawrigidbodyset_rbAngularDamping(this.ptr, A);
        }
        rbSetLinearDamping(A, I) {
          C.rawrigidbodyset_rbSetLinearDamping(this.ptr, A, I);
        }
        rbSetAngularDamping(A, I) {
          C.rawrigidbodyset_rbSetAngularDamping(this.ptr, A, I);
        }
        rbSetEnabled(A, I) {
          C.rawrigidbodyset_rbSetEnabled(this.ptr, A, I);
        }
        rbIsEnabled(A) {
          return 0 !== C.rawrigidbodyset_rbIsEnabled(this.ptr, A);
        }
        rbGravityScale(A) {
          return C.rawrigidbodyset_rbGravityScale(this.ptr, A);
        }
        rbSetGravityScale(A, I, g) {
          C.rawrigidbodyset_rbSetGravityScale(this.ptr, A, I, g);
        }
        rbResetForces(A, I) {
          C.rawrigidbodyset_rbResetForces(this.ptr, A, I);
        }
        rbResetTorques(A, I) {
          C.rawrigidbodyset_rbResetTorques(this.ptr, A, I);
        }
        rbAddForce(A, I, g) {
          a(I, QA), C.rawrigidbodyset_rbAddForce(this.ptr, A, I.ptr, g);
        }
        rbApplyImpulse(A, I, g) {
          a(I, QA), C.rawrigidbodyset_rbApplyImpulse(this.ptr, A, I.ptr, g);
        }
        rbAddTorque(A, I, g) {
          a(I, QA), C.rawrigidbodyset_rbAddTorque(this.ptr, A, I.ptr, g);
        }
        rbApplyTorqueImpulse(A, I, g) {
          a(I, QA),
            C.rawrigidbodyset_rbApplyTorqueImpulse(this.ptr, A, I.ptr, g);
        }
        rbAddForceAtPoint(A, I, g, o) {
          a(I, QA),
            a(g, QA),
            C.rawrigidbodyset_rbAddForceAtPoint(this.ptr, A, I.ptr, g.ptr, o);
        }
        rbApplyImpulseAtPoint(A, I, g, o) {
          a(I, QA),
            a(g, QA),
            C.rawrigidbodyset_rbApplyImpulseAtPoint(
              this.ptr,
              A,
              I.ptr,
              g.ptr,
              o,
            );
        }
        rbUserData(A) {
          return C.rawrigidbodyset_rbUserData(this.ptr, A) >>> 0;
        }
        rbSetUserData(A, I) {
          C.rawrigidbodyset_rbSetUserData(this.ptr, A, I);
        }
        constructor() {
          let A = C.rawrigidbodyset_new();
          return v.__wrap(A);
        }
        createRigidBody(
          A,
          I,
          g,
          o,
          w,
          k,
          M,
          y,
          h,
          F,
          c,
          Ag,
          AC,
          AB,
          AQ,
          AE,
          Ai,
          AD,
          Ao,
          AG,
          Aw,
          Ak,
          AS,
          Aa,
        ) {
          return (
            a(I, QA),
            a(g, _),
            a(M, QA),
            a(y, QA),
            a(h, QA),
            a(F, QA),
            a(c, _),
            C.rawrigidbodyset_createRigidBody(
              this.ptr,
              A,
              I.ptr,
              g.ptr,
              o,
              w,
              k,
              M.ptr,
              y.ptr,
              h.ptr,
              F.ptr,
              c.ptr,
              Ag,
              AC,
              AB,
              AQ,
              AE,
              Ai,
              AD,
              Ao,
              AG,
              Aw,
              Ak,
              AS,
              Aa,
            )
          );
        }
        remove(A, I, g, o, w) {
          a(I, b),
            a(g, l),
            a(o, n),
            a(w, j),
            C.rawrigidbodyset_remove(this.ptr, A, I.ptr, g.ptr, o.ptr, w.ptr);
        }
        len() {
          return C.rawrigidbodyset_len(this.ptr) >>> 0;
        }
        contains(A) {
          return 0 !== C.rawrigidbodyset_contains(this.ptr, A);
        }
        forEachRigidBodyHandle(A) {
          try {
            C.rawrigidbodyset_forEachRigidBodyHandle(this.ptr, J(A));
          } finally {
            o[c++] = void 0;
          }
        }
        propagateModifiedBodyPositionsToColliders(A) {
          a(A, l),
            C.rawrigidbodyset_propagateModifiedBodyPositionsToColliders(
              this.ptr,
              A.ptr,
            );
        }
      };
      let _ = class _ {
        static __wrap(A) {
          let I = Object.create(_.prototype);
          return (I.ptr = A), I;
        }
        __destroy_into_raw() {
          let A = this.ptr;
          return (this.ptr = 0), A;
        }
        free() {
          let A = this.__destroy_into_raw();
          C.__wbg_rawrotation_free(A);
        }
        constructor(A, I, g, o) {
          let w = C.rawrotation_new(A, I, g, o);
          return _.__wrap(w);
        }
        static identity() {
          let A = C.rawrotation_identity();
          return _.__wrap(A);
        }
        get x() {
          return C.rawintegrationparameters_dt(this.ptr);
        }
        get y() {
          return C.rawrotation_y(this.ptr);
        }
        get z() {
          return C.rawcharactercollision_toi(this.ptr);
        }
        get w() {
          return C.rawrotation_w(this.ptr);
        }
      };
      let $ = class $ {
        static __wrap(A) {
          let I = Object.create($.prototype);
          return (I.ptr = A), I;
        }
        __destroy_into_raw() {
          let A = this.ptr;
          return (this.ptr = 0), A;
        }
        free() {
          let A = this.__destroy_into_raw();
          C.__wbg_rawsdpmatrix3_free(A);
        }
        elements() {
          return B(C.rawsdpmatrix3_elements(this.ptr));
        }
      };
      let AA = class AA {
        static __wrap(A) {
          let I = Object.create(AA.prototype);
          return (I.ptr = A), I;
        }
        __destroy_into_raw() {
          let A = this.ptr;
          return (this.ptr = 0), A;
        }
        free() {
          let A = this.__destroy_into_raw();
          C.__wbg_rawserializationpipeline_free(A);
        }
        constructor() {
          let A = C.rawserializationpipeline_new();
          return AA.__wrap(A);
        }
        serializeAll(A, I, g, o, w, k, M, y, h) {
          return (
            a(A, QA),
            a(I, Z),
            a(g, b),
            a(o, Y),
            a(w, x),
            a(k, v),
            a(M, l),
            a(y, n),
            a(h, j),
            B(
              C.rawserializationpipeline_serializeAll(
                this.ptr,
                A.ptr,
                I.ptr,
                g.ptr,
                o.ptr,
                w.ptr,
                k.ptr,
                M.ptr,
                y.ptr,
                h.ptr,
              ),
            )
          );
        }
        deserializeAll(A) {
          let I = C.rawserializationpipeline_deserializeAll(this.ptr, Q(A));
          return 0 === I ? void 0 : d.__wrap(I);
        }
      };
      let IA = class IA {
        static __wrap(A) {
          let I = Object.create(IA.prototype);
          return (I.ptr = A), I;
        }
        __destroy_into_raw() {
          let A = this.ptr;
          return (this.ptr = 0), A;
        }
        free() {
          let A = this.__destroy_into_raw();
          C.__wbg_rawshape_free(A);
        }
        static cuboid(A, I, g) {
          let o = C.rawshape_cuboid(A, I, g);
          return IA.__wrap(o);
        }
        static roundCuboid(A, I, g, o) {
          let w = C.rawshape_roundCuboid(A, I, g, o);
          return IA.__wrap(w);
        }
        static ball(A) {
          let I = C.rawshape_ball(A);
          return IA.__wrap(I);
        }
        static halfspace(A) {
          a(A, QA);
          let I = C.rawshape_halfspace(A.ptr);
          return IA.__wrap(I);
        }
        static capsule(A, I) {
          let g = C.rawshape_capsule(A, I);
          return IA.__wrap(g);
        }
        static cylinder(A, I) {
          let g = C.rawshape_cylinder(A, I);
          return IA.__wrap(g);
        }
        static roundCylinder(A, I, g) {
          let o = C.rawshape_roundCylinder(A, I, g);
          return IA.__wrap(o);
        }
        static cone(A, I) {
          let g = C.rawshape_cone(A, I);
          return IA.__wrap(g);
        }
        static roundCone(A, I, g) {
          let o = C.rawshape_roundCone(A, I, g);
          return IA.__wrap(o);
        }
        static polyline(A, I) {
          let g = q(A, C.__wbindgen_malloc),
            o = AC,
            w = R(I, C.__wbindgen_malloc),
            k = AC,
            M = C.rawshape_polyline(g, o, w, k);
          return IA.__wrap(M);
        }
        static trimesh(A, I) {
          let g = q(A, C.__wbindgen_malloc),
            o = AC,
            w = R(I, C.__wbindgen_malloc),
            k = AC,
            M = C.rawshape_trimesh(g, o, w, k);
          return IA.__wrap(M);
        }
        static heightfield(A, I, g, o) {
          let w = q(g, C.__wbindgen_malloc),
            k = AC;
          a(o, QA);
          let M = C.rawshape_heightfield(A, I, w, k, o.ptr);
          return IA.__wrap(M);
        }
        static segment(A, I) {
          a(A, QA), a(I, QA);
          let g = C.rawshape_segment(A.ptr, I.ptr);
          return IA.__wrap(g);
        }
        static triangle(A, I, g) {
          a(A, QA), a(I, QA), a(g, QA);
          let o = C.rawshape_triangle(A.ptr, I.ptr, g.ptr);
          return IA.__wrap(o);
        }
        static roundTriangle(A, I, g, o) {
          a(A, QA), a(I, QA), a(g, QA);
          let w = C.rawshape_roundTriangle(A.ptr, I.ptr, g.ptr, o);
          return IA.__wrap(w);
        }
        static convexHull(A) {
          let I = q(A, C.__wbindgen_malloc),
            g = AC,
            o = C.rawshape_convexHull(I, g);
          return 0 === o ? void 0 : IA.__wrap(o);
        }
        static roundConvexHull(A, I) {
          let g = q(A, C.__wbindgen_malloc),
            o = AC,
            w = C.rawshape_roundConvexHull(g, o, I);
          return 0 === w ? void 0 : IA.__wrap(w);
        }
        static convexMesh(A, I) {
          let g = q(A, C.__wbindgen_malloc),
            o = AC,
            w = R(I, C.__wbindgen_malloc),
            k = AC,
            M = C.rawshape_convexMesh(g, o, w, k);
          return 0 === M ? void 0 : IA.__wrap(M);
        }
        static roundConvexMesh(A, I, g) {
          let o = q(A, C.__wbindgen_malloc),
            w = AC,
            k = R(I, C.__wbindgen_malloc),
            M = AC,
            y = C.rawshape_roundConvexMesh(o, w, k, M, g);
          return 0 === y ? void 0 : IA.__wrap(y);
        }
        castShape(A, I, g, o, w, k, M, y, h) {
          a(A, QA), a(I, _), a(g, QA), a(o, IA), a(w, QA), a(k, _), a(M, QA);
          let F = C.rawshape_castShape(
            this.ptr,
            A.ptr,
            I.ptr,
            g.ptr,
            o.ptr,
            w.ptr,
            k.ptr,
            M.ptr,
            y,
            h,
          );
          return 0 === F ? void 0 : BA.__wrap(F);
        }
        intersectsShape(A, I, g, o, w) {
          return (
            a(A, QA),
            a(I, _),
            a(g, IA),
            a(o, QA),
            a(w, _),
            0 !==
              C.rawshape_intersectsShape(
                this.ptr,
                A.ptr,
                I.ptr,
                g.ptr,
                o.ptr,
                w.ptr,
              )
          );
        }
        contactShape(A, I, g, o, w, k) {
          a(A, QA), a(I, _), a(g, IA), a(o, QA), a(w, _);
          let M = C.rawshape_contactShape(
            this.ptr,
            A.ptr,
            I.ptr,
            g.ptr,
            o.ptr,
            w.ptr,
            k,
          );
          return 0 === M ? void 0 : CA.__wrap(M);
        }
        containsPoint(A, I, g) {
          return (
            a(A, QA),
            a(I, _),
            a(g, QA),
            0 !== C.rawshape_containsPoint(this.ptr, A.ptr, I.ptr, g.ptr)
          );
        }
        projectPoint(A, I, g, o) {
          a(A, QA), a(I, _), a(g, QA);
          let w = C.rawshape_projectPoint(this.ptr, A.ptr, I.ptr, g.ptr, o);
          return X.__wrap(w);
        }
        intersectsRay(A, I, g, o, w) {
          return (
            a(A, QA),
            a(I, _),
            a(g, QA),
            a(o, QA),
            0 !==
              C.rawshape_intersectsRay(this.ptr, A.ptr, I.ptr, g.ptr, o.ptr, w)
          );
        }
        castRay(A, I, g, o, w, k) {
          return (
            a(A, QA),
            a(I, _),
            a(g, QA),
            a(o, QA),
            C.rawshape_castRay(this.ptr, A.ptr, I.ptr, g.ptr, o.ptr, w, k)
          );
        }
        castRayAndGetNormal(A, I, g, o, w, k) {
          a(A, QA), a(I, _), a(g, QA), a(o, QA);
          let M = C.rawshape_castRayAndGetNormal(
            this.ptr,
            A.ptr,
            I.ptr,
            g.ptr,
            o.ptr,
            w,
            k,
          );
          return 0 === M ? void 0 : u.__wrap(M);
        }
      };
      let gA = class gA {
        static __wrap(A) {
          let I = Object.create(gA.prototype);
          return (I.ptr = A), I;
        }
        __destroy_into_raw() {
          let A = this.ptr;
          return (this.ptr = 0), A;
        }
        free() {
          let A = this.__destroy_into_raw();
          C.__wbg_rawshapecollidertoi_free(A);
        }
        colliderHandle() {
          return C.rawcharactercollision_handle(this.ptr);
        }
        toi() {
          return C.rawcharactercollision_toi(this.ptr);
        }
        witness1() {
          let A = C.rawcharactercollision_worldWitness1(this.ptr);
          return QA.__wrap(A);
        }
        witness2() {
          let A = C.rawshapecollidertoi_witness2(this.ptr);
          return QA.__wrap(A);
        }
        normal1() {
          let A = C.rawcharactercollision_worldNormal1(this.ptr);
          return QA.__wrap(A);
        }
        normal2() {
          let A = C.rawshapecollidertoi_normal2(this.ptr);
          return QA.__wrap(A);
        }
      };
      let CA = class CA {
        static __wrap(A) {
          let I = Object.create(CA.prototype);
          return (I.ptr = A), I;
        }
        __destroy_into_raw() {
          let A = this.ptr;
          return (this.ptr = 0), A;
        }
        free() {
          let A = this.__destroy_into_raw();
          C.__wbg_rawshapecontact_free(A);
        }
        distance() {
          return C.rawshapecontact_distance(this.ptr);
        }
        point1() {
          let A = C.rawkinematiccharactercontroller_computedMovement(this.ptr);
          return QA.__wrap(A);
        }
        point2() {
          let A = C.rawcharactercollision_worldWitness1(this.ptr);
          return QA.__wrap(A);
        }
        normal1() {
          let A = C.rawshapecollidertoi_witness2(this.ptr);
          return QA.__wrap(A);
        }
        normal2() {
          let A = C.rawcharactercollision_worldNormal1(this.ptr);
          return QA.__wrap(A);
        }
      };
      let BA = class BA {
        static __wrap(A) {
          let I = Object.create(BA.prototype);
          return (I.ptr = A), I;
        }
        __destroy_into_raw() {
          let A = this.ptr;
          return (this.ptr = 0), A;
        }
        free() {
          let A = this.__destroy_into_raw();
          C.__wbg_rawshapetoi_free(A);
        }
        toi() {
          return C.rawintegrationparameters_dt(this.ptr);
        }
        witness1() {
          let A = C.rawshapetoi_witness1(this.ptr);
          return QA.__wrap(A);
        }
        witness2() {
          let A = C.rawcontactforceevent_total_force(this.ptr);
          return QA.__wrap(A);
        }
        normal1() {
          let A = C.rawshapetoi_normal1(this.ptr);
          return QA.__wrap(A);
        }
        normal2() {
          let A = C.rawshapetoi_normal2(this.ptr);
          return QA.__wrap(A);
        }
      };
      let QA = class QA {
        static __wrap(A) {
          let I = Object.create(QA.prototype);
          return (I.ptr = A), I;
        }
        __destroy_into_raw() {
          let A = this.ptr;
          return (this.ptr = 0), A;
        }
        free() {
          let A = this.__destroy_into_raw();
          C.__wbg_rawvector_free(A);
        }
        static zero() {
          let A = C.rawvector_zero();
          return QA.__wrap(A);
        }
        constructor(A, I, g) {
          let o = C.rawvector_new(A, I, g);
          return QA.__wrap(o);
        }
        get x() {
          return C.rawintegrationparameters_dt(this.ptr);
        }
        set x(A) {
          C.rawintegrationparameters_set_dt(this.ptr, A);
        }
        get y() {
          return C.rawrotation_y(this.ptr);
        }
        set y(A) {
          C.rawvector_set_y(this.ptr, A);
        }
        get z() {
          return C.rawcharactercollision_toi(this.ptr);
        }
        set z(A) {
          C.rawintegrationparameters_set_erp(this.ptr, A);
        }
        xyz() {
          let A = C.rawvector_xyz(this.ptr);
          return QA.__wrap(A);
        }
        yxz() {
          let A = C.rawvector_yxz(this.ptr);
          return QA.__wrap(A);
        }
        zxy() {
          let A = C.rawvector_zxy(this.ptr);
          return QA.__wrap(A);
        }
        xzy() {
          let A = C.rawvector_xzy(this.ptr);
          return QA.__wrap(A);
        }
        yzx() {
          let A = C.rawvector_yzx(this.ptr);
          return QA.__wrap(A);
        }
        zyx() {
          let A = C.rawvector_zyx(this.ptr);
          return QA.__wrap(A);
        }
      };
      async function EA(A) {
        void 0 === A && (A = new URL("rapier_wasm3d_bg.wasm", "<deleted>"));
        let I = (function () {
          let A = { wbg: {} };
          return (
            (A.wbg.__wbindgen_object_drop_ref = function (A) {
              B(A);
            }),
            (A.wbg.__wbindgen_number_new = function (A) {
              return Q(A);
            }),
            (A.wbg.__wbindgen_number_get = function (A, I) {
              let g = o[I],
                C = "number" == typeof g ? g : void 0;
              (D()[A / 8 + 1] = E(C) ? 0 : C), (G()[A / 4 + 0] = !E(C));
            }),
            (A.wbg.__wbindgen_boolean_get = function (A) {
              let I = o[A];
              return "boolean" == typeof I ? (I ? 1 : 0) : 2;
            }),
            (A.wbg.__wbindgen_is_function = function (A) {
              return "function" == typeof o[A];
            }),
            (A.wbg.__wbg_rawraycolliderintersection_new = function (A) {
              return Q(P.__wrap(A));
            }),
            (A.wbg.__wbg_rawcontactforceevent_new = function (A) {
              return Q(t.__wrap(A));
            }),
            (A.wbg.__wbg_call_168da88779e35f61 = function () {
              return s(function (A, I, g) {
                return Q(o[A].call(o[I], o[g]));
              }, arguments);
            }),
            (A.wbg.__wbg_call_3999bee59e9f7719 = function () {
              return s(function (A, I, g, C) {
                return Q(o[A].call(o[I], o[g], o[C]));
              }, arguments);
            }),
            (A.wbg.__wbg_call_e1f72c051cdab859 = function () {
              return s(function (A, I, g, C, w) {
                return Q(o[A].call(o[I], o[g], o[C], o[w]));
              }, arguments);
            }),
            (A.wbg.__wbg_bind_10dfe70e95d2a480 = function (A, I, g, C) {
              return Q(o[A].bind(o[I], o[g], o[C]));
            }),
            (A.wbg.__wbg_buffer_3f3d764d4747d564 = function (A) {
              return Q(o[A].buffer);
            }),
            (A.wbg.__wbg_newwithbyteoffsetandlength_d9aa266703cb98be =
              function (A, I, g) {
                return Q(new Uint8Array(o[A], I >>> 0, g >>> 0));
              }),
            (A.wbg.__wbg_new_8c3f0052272a457a = function (A) {
              return Q(new Uint8Array(o[A]));
            }),
            (A.wbg.__wbg_set_83db9690f9353e79 = function (A, I, g) {
              o[A].set(o[I], g >>> 0);
            }),
            (A.wbg.__wbg_length_9e1ae1900cb0fbd5 = function (A) {
              return o[A].length;
            }),
            (A.wbg.__wbg_newwithbyteoffsetandlength_be22e5fcf4f69ab4 =
              function (A, I, g) {
                return Q(new Float32Array(o[A], I >>> 0, g >>> 0));
              }),
            (A.wbg.__wbg_set_0e0314cf6675c1b9 = function (A, I, g) {
              o[A].set(o[I], g >>> 0);
            }),
            (A.wbg.__wbg_length_9a2deed95d22668d = function (A) {
              return o[A].length;
            }),
            (A.wbg.__wbg_newwithlength_a7168e4a1e8f5e12 = function (A) {
              return Q(new Float32Array(A >>> 0));
            }),
            (A.wbg.__wbindgen_throw = function (A, I) {
              throw Error(S(A, I));
            }),
            (A.wbg.__wbindgen_memory = function () {
              return Q(C.memory);
            }),
            A
          );
        })();
        ("string" == typeof A ||
          ("function" == typeof Request && A instanceof Request) ||
          ("function" == typeof URL && A instanceof URL)) &&
          (A = fetch(A));
        let { instance: g, module: w } = await (async function (A, I) {
          if ("function" == typeof Response && A instanceof Response) {
            if ("function" == typeof WebAssembly.instantiateStreaming)
              try {
                return await WebAssembly.instantiateStreaming(A, I);
              } catch (I) {
                if ("application/wasm" == A.headers.get("Content-Type"))
                  throw I;
                console.warn(
                  "`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",
                  I,
                );
              }
            let g = await A.arrayBuffer();
            return await WebAssembly.instantiate(g, I);
          }
          {
            let g = await WebAssembly.instantiate(A, I);
            return g instanceof WebAssembly.Instance
              ? { instance: g, module: A }
              : g;
          }
        })(await A, I);
        return (
          (C = g.exports),
          (EA.__wbindgen_wasm_module = w),
          (F = new Float32Array()),
          (k = new Float64Array()),
          (M = new Int32Array()),
          (Ag = new Uint32Array()),
          (h = new Uint8Array()),
          C
        );
      }
      let iA = class iA {
        constructor(A, I, g) {
          (this.x = A), (this.y = I), (this.z = g);
        }
      };
      let DA = class DA {
        static new(A, I, g) {
          return new iA(A, I, g);
        }
        static intoRaw(A) {
          return new QA(A.x, A.y, A.z);
        }
        static zeros() {
          return DA.new(0, 0, 0);
        }
        static fromRaw(A) {
          if (!A) return null;
          let I = DA.new(A.x, A.y, A.z);
          return A.free(), I;
        }
        static copy(A, I) {
          (A.x = I.x), (A.y = I.y), (A.z = I.z);
        }
      };
      let oA = class oA {
        constructor(A, I, g, C) {
          (this.x = A), (this.y = I), (this.z = g), (this.w = C);
        }
      };
      let GA = class GA {
        static identity() {
          return new oA(0, 0, 0, 1);
        }
        static fromRaw(A) {
          if (!A) return null;
          let I = new oA(A.x, A.y, A.z, A.w);
          return A.free(), I;
        }
        static intoRaw(A) {
          return new _(A.x, A.y, A.z, A.w);
        }
        static copy(A, I) {
          (A.x = I.x), (A.y = I.y), (A.z = I.z), (A.w = I.w);
        }
      };
      let wA = class wA {
        constructor(A) {
          this.elements = A;
        }
        get m11() {
          return this.elements[0];
        }
        get m12() {
          return this.elements[1];
        }
        get m21() {
          return this.m12;
        }
        get m13() {
          return this.elements[2];
        }
        get m31() {
          return this.m13;
        }
        get m22() {
          return this.elements[3];
        }
        get m23() {
          return this.elements[4];
        }
        get m32() {
          return this.m23;
        }
        get m33() {
          return this.elements[5];
        }
      };
      let kA = class kA {
        static fromRaw(A) {
          let I = new wA(A.elements());
          return A.free(), I;
        }
      };
      ((AQ = Ay || (Ay = {}))[(AQ.Dynamic = 0)] = "Dynamic"),
        (AQ[(AQ.Fixed = 1)] = "Fixed"),
        (AQ[(AQ.KinematicPositionBased = 2)] = "KinematicPositionBased"),
        (AQ[(AQ.KinematicVelocityBased = 3)] = "KinematicVelocityBased");
      let sA = class sA {
        constructor(A, I, g) {
          (this.rawSet = A), (this.colliderSet = I), (this.handle = g);
        }
        finalizeDeserialization(A) {
          this.colliderSet = A;
        }
        isValid() {
          return this.rawSet.contains(this.handle);
        }
        lockTranslations(A, I) {
          return this.rawSet.rbLockTranslations(this.handle, A, I);
        }
        lockRotations(A, I) {
          return this.rawSet.rbLockRotations(this.handle, A, I);
        }
        setEnabledTranslations(A, I, g, C) {
          return this.rawSet.rbSetEnabledTranslations(this.handle, A, I, g, C);
        }
        restrictTranslations(A, I, g, C) {
          this.setEnabledTranslations(A, I, g, C);
        }
        setEnabledRotations(A, I, g, C) {
          return this.rawSet.rbSetEnabledRotations(this.handle, A, I, g, C);
        }
        restrictRotations(A, I, g, C) {
          this.setEnabledRotations(A, I, g, C);
        }
        dominanceGroup() {
          return this.rawSet.rbDominanceGroup(this.handle);
        }
        setDominanceGroup(A) {
          this.rawSet.rbSetDominanceGroup(this.handle, A);
        }
        enableCcd(A) {
          this.rawSet.rbEnableCcd(this.handle, A);
        }
        translation() {
          let A = this.rawSet.rbTranslation(this.handle);
          return DA.fromRaw(A);
        }
        rotation() {
          let A = this.rawSet.rbRotation(this.handle);
          return GA.fromRaw(A);
        }
        nextTranslation() {
          let A = this.rawSet.rbNextTranslation(this.handle);
          return DA.fromRaw(A);
        }
        nextRotation() {
          let A = this.rawSet.rbNextRotation(this.handle);
          return GA.fromRaw(A);
        }
        setTranslation(A, I) {
          this.rawSet.rbSetTranslation(this.handle, A.x, A.y, A.z, I);
        }
        setLinvel(A, I) {
          let g = DA.intoRaw(A);
          this.rawSet.rbSetLinvel(this.handle, g, I), g.free();
        }
        gravityScale() {
          return this.rawSet.rbGravityScale(this.handle);
        }
        setGravityScale(A, I) {
          this.rawSet.rbSetGravityScale(this.handle, A, I);
        }
        setRotation(A, I) {
          this.rawSet.rbSetRotation(this.handle, A.x, A.y, A.z, A.w, I);
        }
        setAngvel(A, I) {
          let g = DA.intoRaw(A);
          this.rawSet.rbSetAngvel(this.handle, g, I), g.free();
        }
        setNextKinematicTranslation(A) {
          this.rawSet.rbSetNextKinematicTranslation(this.handle, A.x, A.y, A.z);
        }
        setNextKinematicRotation(A) {
          this.rawSet.rbSetNextKinematicRotation(
            this.handle,
            A.x,
            A.y,
            A.z,
            A.w,
          );
        }
        linvel() {
          return DA.fromRaw(this.rawSet.rbLinvel(this.handle));
        }
        angvel() {
          return DA.fromRaw(this.rawSet.rbAngvel(this.handle));
        }
        mass() {
          return this.rawSet.rbMass(this.handle);
        }
        effectiveInvMass() {
          return DA.fromRaw(this.rawSet.rbEffectiveInvMass(this.handle));
        }
        invMass() {
          return this.rawSet.rbInvMass(this.handle);
        }
        localCom() {
          return DA.fromRaw(this.rawSet.rbLocalCom(this.handle));
        }
        worldCom() {
          return DA.fromRaw(this.rawSet.rbWorldCom(this.handle));
        }
        invPrincipalInertiaSqrt() {
          return DA.fromRaw(this.rawSet.rbInvPrincipalInertiaSqrt(this.handle));
        }
        principalInertia() {
          return DA.fromRaw(this.rawSet.rbPrincipalInertia(this.handle));
        }
        principalInertiaLocalFrame() {
          return GA.fromRaw(
            this.rawSet.rbPrincipalInertiaLocalFrame(this.handle),
          );
        }
        effectiveWorldInvInertiaSqrt() {
          return kA.fromRaw(
            this.rawSet.rbEffectiveWorldInvInertiaSqrt(this.handle),
          );
        }
        effectiveAngularInertia() {
          return kA.fromRaw(this.rawSet.rbEffectiveAngularInertia(this.handle));
        }
        sleep() {
          this.rawSet.rbSleep(this.handle);
        }
        wakeUp() {
          this.rawSet.rbWakeUp(this.handle);
        }
        isCcdEnabled() {
          return this.rawSet.rbIsCcdEnabled(this.handle);
        }
        numColliders() {
          return this.rawSet.rbNumColliders(this.handle);
        }
        collider(A) {
          return this.colliderSet.get(this.rawSet.rbCollider(this.handle, A));
        }
        setEnabled(A) {
          this.rawSet.rbSetEnabled(this.handle, A);
        }
        isEnabled() {
          return this.rawSet.rbIsEnabled(this.handle);
        }
        bodyType() {
          return this.rawSet.rbBodyType(this.handle);
        }
        setBodyType(A, I) {
          return this.rawSet.rbSetBodyType(this.handle, A, I);
        }
        isSleeping() {
          return this.rawSet.rbIsSleeping(this.handle);
        }
        isMoving() {
          return this.rawSet.rbIsMoving(this.handle);
        }
        isFixed() {
          return this.rawSet.rbIsFixed(this.handle);
        }
        isKinematic() {
          return this.rawSet.rbIsKinematic(this.handle);
        }
        isDynamic() {
          return this.rawSet.rbIsDynamic(this.handle);
        }
        linearDamping() {
          return this.rawSet.rbLinearDamping(this.handle);
        }
        angularDamping() {
          return this.rawSet.rbAngularDamping(this.handle);
        }
        setLinearDamping(A) {
          this.rawSet.rbSetLinearDamping(this.handle, A);
        }
        recomputeMassPropertiesFromColliders() {
          this.rawSet.rbRecomputeMassPropertiesFromColliders(
            this.handle,
            this.colliderSet.raw,
          );
        }
        setAdditionalMass(A, I) {
          this.rawSet.rbSetAdditionalMass(this.handle, A, I);
        }
        setAdditionalMassProperties(A, I, g, C, o) {
          let w = DA.intoRaw(I),
            k = DA.intoRaw(g),
            M = GA.intoRaw(C);
          this.rawSet.rbSetAdditionalMassProperties(this.handle, A, w, k, M, o),
            w.free(),
            k.free(),
            M.free();
        }
        setAngularDamping(A) {
          this.rawSet.rbSetAngularDamping(this.handle, A);
        }
        resetForces(A) {
          this.rawSet.rbResetForces(this.handle, A);
        }
        resetTorques(A) {
          this.rawSet.rbResetTorques(this.handle, A);
        }
        addForce(A, I) {
          let g = DA.intoRaw(A);
          this.rawSet.rbAddForce(this.handle, g, I), g.free();
        }
        applyImpulse(A, I) {
          let g = DA.intoRaw(A);
          this.rawSet.rbApplyImpulse(this.handle, g, I), g.free();
        }
        addTorque(A, I) {
          let g = DA.intoRaw(A);
          this.rawSet.rbAddTorque(this.handle, g, I), g.free();
        }
        applyTorqueImpulse(A, I) {
          let g = DA.intoRaw(A);
          this.rawSet.rbApplyTorqueImpulse(this.handle, g, I), g.free();
        }
        addForceAtPoint(A, I, g) {
          let C = DA.intoRaw(A),
            o = DA.intoRaw(I);
          this.rawSet.rbAddForceAtPoint(this.handle, C, o, g),
            C.free(),
            o.free();
        }
        applyImpulseAtPoint(A, I, g) {
          let C = DA.intoRaw(A),
            o = DA.intoRaw(I);
          this.rawSet.rbApplyImpulseAtPoint(this.handle, C, o, g),
            C.free(),
            o.free();
        }
      };
      let cA = class cA {
        constructor(A) {
          (this.enabled = !0),
            (this.status = A),
            (this.translation = DA.zeros()),
            (this.rotation = GA.identity()),
            (this.gravityScale = 1),
            (this.linvel = DA.zeros()),
            (this.mass = 0),
            (this.massOnly = !1),
            (this.centerOfMass = DA.zeros()),
            (this.translationsEnabledX = !0),
            (this.translationsEnabledY = !0),
            (this.angvel = DA.zeros()),
            (this.principalAngularInertia = DA.zeros()),
            (this.angularInertiaLocalFrame = GA.identity()),
            (this.translationsEnabledZ = !0),
            (this.rotationsEnabledX = !0),
            (this.rotationsEnabledY = !0),
            (this.rotationsEnabledZ = !0),
            (this.linearDamping = 0),
            (this.angularDamping = 0),
            (this.canSleep = !0),
            (this.sleeping = !1),
            (this.ccdEnabled = !1),
            (this.dominanceGroup = 0);
        }
        static dynamic() {
          return new cA(Ay.Dynamic);
        }
        static kinematicPositionBased() {
          return new cA(Ay.KinematicPositionBased);
        }
        static kinematicVelocityBased() {
          return new cA(Ay.KinematicVelocityBased);
        }
        static fixed() {
          return new cA(Ay.Fixed);
        }
        static newDynamic() {
          return new cA(Ay.Dynamic);
        }
        static newKinematicPositionBased() {
          return new cA(Ay.KinematicPositionBased);
        }
        static newKinematicVelocityBased() {
          return new cA(Ay.KinematicVelocityBased);
        }
        static newStatic() {
          return new cA(Ay.Fixed);
        }
        setDominanceGroup(A) {
          return (this.dominanceGroup = A), this;
        }
        setEnabled(A) {
          return (this.enabled = A), this;
        }
        setTranslation(A, I, g) {
          if (
            "number" != typeof A ||
            "number" != typeof I ||
            "number" != typeof g
          )
            throw TypeError("The translation components must be numbers.");
          return (this.translation = { x: A, y: I, z: g }), this;
        }
        setRotation(A) {
          return GA.copy(this.rotation, A), this;
        }
        setGravityScale(A) {
          return (this.gravityScale = A), this;
        }
        setAdditionalMass(A) {
          return (this.mass = A), (this.massOnly = !0), this;
        }
        setLinvel(A, I, g) {
          if (
            "number" != typeof A ||
            "number" != typeof I ||
            "number" != typeof g
          )
            throw TypeError("The linvel components must be numbers.");
          return (this.linvel = { x: A, y: I, z: g }), this;
        }
        setAngvel(A) {
          return DA.copy(this.angvel, A), this;
        }
        setAdditionalMassProperties(A, I, g, C) {
          return (
            (this.mass = A),
            DA.copy(this.centerOfMass, I),
            DA.copy(this.principalAngularInertia, g),
            GA.copy(this.angularInertiaLocalFrame, C),
            (this.massOnly = !1),
            this
          );
        }
        enabledTranslations(A, I, g) {
          return (
            (this.translationsEnabledX = A),
            (this.translationsEnabledY = I),
            (this.translationsEnabledZ = g),
            this
          );
        }
        restrictTranslations(A, I, g) {
          return this.enabledTranslations(A, I, g);
        }
        lockTranslations() {
          return this.enabledTranslations(!1, !1, !1);
        }
        enabledRotations(A, I, g) {
          return (
            (this.rotationsEnabledX = A),
            (this.rotationsEnabledY = I),
            (this.rotationsEnabledZ = g),
            this
          );
        }
        restrictRotations(A, I, g) {
          return this.enabledRotations(A, I, g);
        }
        lockRotations() {
          return this.restrictRotations(!1, !1, !1);
        }
        setLinearDamping(A) {
          return (this.linearDamping = A), this;
        }
        setAngularDamping(A) {
          return (this.angularDamping = A), this;
        }
        setCanSleep(A) {
          return (this.canSleep = A), this;
        }
        setSleeping(A) {
          return (this.sleeping = A), this;
        }
        setCcdEnabled(A) {
          return (this.ccdEnabled = A), this;
        }
        setUserData(A) {
          return (this.userData = A), this;
        }
      };
      let YA = class YA {
        constructor() {
          (this.fconv = new Float64Array(1)),
            (this.uconv = new Uint32Array(this.fconv.buffer)),
            (this.data = []),
            (this.size = 0);
        }
        set(A, I) {
          let g = this.index(A);
          for (; this.data.length <= g; ) this.data.push(null);
          null == this.data[g] && (this.size += 1), (this.data[g] = I);
        }
        len() {
          return this.size;
        }
        delete(A) {
          let I = this.index(A);
          I < this.data.length &&
            (null != this.data[I] && (this.size -= 1), (this.data[I] = null));
        }
        clear() {
          this.data = [];
        }
        get(A) {
          let I = this.index(A);
          return I < this.data.length ? this.data[I] : null;
        }
        forEach(A) {
          for (let I of this.data) null != I && A(I);
        }
        getAll() {
          return this.data.filter((A) => null != A);
        }
        index(A) {
          return (this.fconv[0] = A), this.uconv[0];
        }
      };
      let LA = class LA {
        constructor(A) {
          (this.raw = A || new v()),
            (this.map = new YA()),
            A &&
              A.forEachRigidBodyHandle((I) => {
                this.map.set(I, new sA(A, null, I));
              });
        }
        free() {
          this.raw && this.raw.free(),
            (this.raw = void 0),
            this.map && this.map.clear(),
            (this.map = void 0);
        }
        finalizeDeserialization(A) {
          this.map.forEach((I) => I.finalizeDeserialization(A));
        }
        createRigidBody(A, I) {
          let g = DA.intoRaw(I.translation),
            C = GA.intoRaw(I.rotation),
            o = DA.intoRaw(I.linvel),
            w = DA.intoRaw(I.centerOfMass),
            k = DA.intoRaw(I.angvel),
            M = DA.intoRaw(I.principalAngularInertia),
            y = GA.intoRaw(I.angularInertiaLocalFrame),
            h = this.raw.createRigidBody(
              I.enabled,
              g,
              C,
              I.gravityScale,
              I.mass,
              I.massOnly,
              w,
              o,
              k,
              M,
              y,
              I.translationsEnabledX,
              I.translationsEnabledY,
              I.translationsEnabledZ,
              I.rotationsEnabledX,
              I.rotationsEnabledY,
              I.rotationsEnabledZ,
              I.linearDamping,
              I.angularDamping,
              I.status,
              I.canSleep,
              I.sleeping,
              I.ccdEnabled,
              I.dominanceGroup,
            );
          g.free(), C.free(), o.free(), w.free(), k.free(), M.free(), y.free();
          let F = new sA(this.raw, A, h);
          return (F.userData = I.userData), this.map.set(h, F), F;
        }
        remove(A, I, g, C, o) {
          for (let I = 0; I < this.raw.rbNumColliders(A); I += 1)
            g.unmap(this.raw.rbCollider(A, I));
          C.forEachJointHandleAttachedToRigidBody(A, (A) => C.unmap(A)),
            o.forEachJointHandleAttachedToRigidBody(A, (A) => o.unmap(A)),
            this.raw.remove(A, I.raw, g.raw, C.raw, o.raw),
            this.map.delete(A);
        }
        len() {
          return this.map.len();
        }
        contains(A) {
          return null != this.get(A);
        }
        get(A) {
          return this.map.get(A);
        }
        forEach(A) {
          this.map.forEach(A);
        }
        forEachActiveRigidBody(A, I) {
          A.forEachActiveRigidBodyHandle((A) => {
            I(this.get(A));
          });
        }
        getAll() {
          return this.map.getAll();
        }
      };
      let HA = class HA {
        constructor(A) {
          this.raw = A || new Z();
        }
        free() {
          this.raw && this.raw.free(), (this.raw = void 0);
        }
        get dt() {
          return this.raw.dt;
        }
        get erp() {
          return this.raw.erp;
        }
        get allowedLinearError() {
          return this.raw.allowedLinearError;
        }
        get predictionDistance() {
          return this.raw.predictionDistance;
        }
        get maxVelocityIterations() {
          return this.raw.maxVelocityIterations;
        }
        get maxVelocityFrictionIterations() {
          return this.raw.maxVelocityFrictionIterations;
        }
        get maxStabilizationIterations() {
          return this.raw.maxStabilizationIterations;
        }
        get minIslandSize() {
          return this.raw.minIslandSize;
        }
        get maxCcdSubsteps() {
          return this.raw.maxCcdSubsteps;
        }
        set dt(A) {
          this.raw.dt = A;
        }
        set erp(A) {
          this.raw.erp = A;
        }
        set allowedLinearError(A) {
          this.raw.allowedLinearError = A;
        }
        set predictionDistance(A) {
          this.raw.predictionDistance = A;
        }
        set maxVelocityIterations(A) {
          this.raw.maxVelocityIterations = A;
        }
        set maxVelocityFrictionIterations(A) {
          this.raw.maxVelocityFrictionIterations = A;
        }
        set maxStabilizationIterations(A) {
          this.raw.maxStabilizationIterations = A;
        }
        set minIslandSize(A) {
          this.raw.minIslandSize = A;
        }
        set maxCcdSubsteps(A) {
          this.raw.maxCcdSubsteps = A;
        }
      };
      ((AE = AJ || (AJ = {}))[(AE.Revolute = 0)] = "Revolute"),
        (AE[(AE.Fixed = 1)] = "Fixed"),
        (AE[(AE.Prismatic = 2)] = "Prismatic"),
        (AE[(AE.Spherical = 3)] = "Spherical"),
        ((Ai = AU || (AU = {}))[(Ai.AccelerationBased = 0)] =
          "AccelerationBased"),
        (Ai[(Ai.ForceBased = 1)] = "ForceBased");
      let lA = class lA {
        constructor(A, I, g) {
          (this.rawSet = A), (this.bodySet = I), (this.handle = g);
        }
        static newTyped(A, I, g) {
          switch (A.jointType(g)) {
            case AJ.Revolute:
              return new rA(A, I, g);
            case AJ.Prismatic:
              return new eA(A, I, g);
            case AJ.Fixed:
              return new pA(A, I, g);
            case AJ.Spherical:
              return new dA(A, I, g);
            default:
              return new lA(A, I, g);
          }
        }
        finalizeDeserialization(A) {
          this.bodySet = A;
        }
        isValid() {
          return this.rawSet.contains(this.handle);
        }
        body1() {
          return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle));
        }
        body2() {
          return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle));
        }
        type() {
          return this.rawSet.jointType(this.handle);
        }
        frameX1() {
          return GA.fromRaw(this.rawSet.jointFrameX1(this.handle));
        }
        frameX2() {
          return GA.fromRaw(this.rawSet.jointFrameX2(this.handle));
        }
        anchor1() {
          return DA.fromRaw(this.rawSet.jointAnchor1(this.handle));
        }
        anchor2() {
          return DA.fromRaw(this.rawSet.jointAnchor2(this.handle));
        }
        setAnchor1(A) {
          let I = DA.intoRaw(A);
          this.rawSet.jointSetAnchor1(this.handle, I), I.free();
        }
        setAnchor2(A) {
          let I = DA.intoRaw(A);
          this.rawSet.jointSetAnchor2(this.handle, I), I.free();
        }
        setContactsEnabled(A) {
          this.rawSet.jointSetContactsEnabled(this.handle, A);
        }
        contactsEnabled() {
          return this.rawSet.jointContactsEnabled(this.handle);
        }
      };
      let tA = class tA extends lA {
        limitsEnabled() {
          return this.rawSet.jointLimitsEnabled(this.handle, this.rawAxis());
        }
        limitsMin() {
          return this.rawSet.jointLimitsMin(this.handle, this.rawAxis());
        }
        limitsMax() {
          return this.rawSet.jointLimitsMax(this.handle, this.rawAxis());
        }
        setLimits(A, I) {
          this.rawSet.jointSetLimits(this.handle, this.rawAxis(), A, I);
        }
        configureMotorModel(A) {
          this.rawSet.jointConfigureMotorModel(this.handle, this.rawAxis(), A);
        }
        configureMotorVelocity(A, I) {
          this.rawSet.jointConfigureMotorVelocity(
            this.handle,
            this.rawAxis(),
            A,
            I,
          );
        }
        configureMotorPosition(A, I, g) {
          this.rawSet.jointConfigureMotorPosition(
            this.handle,
            this.rawAxis(),
            A,
            I,
            g,
          );
        }
        configureMotor(A, I, g, C) {
          this.rawSet.jointConfigureMotor(
            this.handle,
            this.rawAxis(),
            A,
            I,
            g,
            C,
          );
        }
      };
      let pA = class pA extends lA {};
      let eA = class eA extends tA {
        rawAxis() {
          return AB.X;
        }
      };
      let rA = class rA extends tA {
        rawAxis() {
          return AB.AngX;
        }
      };
      let dA = class dA extends lA {};
      let TA = class TA {
        constructor() {}
        static fixed(A, I, g, C) {
          let o = new TA();
          return (
            (o.anchor1 = A),
            (o.anchor2 = g),
            (o.frame1 = I),
            (o.frame2 = C),
            (o.jointType = AJ.Fixed),
            o
          );
        }
        static spherical(A, I) {
          let g = new TA();
          return (
            (g.anchor1 = A), (g.anchor2 = I), (g.jointType = AJ.Spherical), g
          );
        }
        static prismatic(A, I, g) {
          let C = new TA();
          return (
            (C.anchor1 = A),
            (C.anchor2 = I),
            (C.axis = g),
            (C.jointType = AJ.Prismatic),
            C
          );
        }
        static revolute(A, I, g) {
          let C = new TA();
          return (
            (C.anchor1 = A),
            (C.anchor2 = I),
            (C.axis = g),
            (C.jointType = AJ.Revolute),
            C
          );
        }
        intoRaw() {
          let A,
            I,
            g = DA.intoRaw(this.anchor1),
            C = DA.intoRaw(this.anchor2),
            o = !1,
            w = 0,
            k = 0;
          switch (this.jointType) {
            case AJ.Fixed:
              let M = GA.intoRaw(this.frame1),
                y = GA.intoRaw(this.frame2);
              (I = O.fixed(g, M, C, y)), M.free(), y.free();
              break;
            case AJ.Prismatic:
              (A = DA.intoRaw(this.axis)),
                this.limitsEnabled &&
                  ((o = !0), (w = this.limits[0]), (k = this.limits[1])),
                (I = O.prismatic(g, C, A, o, w, k)),
                A.free();
              break;
            case AJ.Spherical:
              I = O.spherical(g, C);
              break;
            case AJ.Revolute:
              (A = DA.intoRaw(this.axis)), (I = O.revolute(g, C, A)), A.free();
          }
          return g.free(), C.free(), I;
        }
      };
      let OA = class OA {
        constructor(A) {
          (this.raw = A || new n()),
            (this.map = new YA()),
            A &&
              A.forEachJointHandle((I) => {
                this.map.set(I, lA.newTyped(A, null, I));
              });
        }
        free() {
          this.raw && this.raw.free(),
            (this.raw = void 0),
            this.map && this.map.clear(),
            (this.map = void 0);
        }
        finalizeDeserialization(A) {
          this.map.forEach((I) => I.finalizeDeserialization(A));
        }
        createJoint(A, I, g, C, o) {
          let w = I.intoRaw(),
            k = this.raw.createJoint(w, g, C, o);
          w.free();
          let M = lA.newTyped(this.raw, A, k);
          return this.map.set(k, M), M;
        }
        remove(A, I) {
          this.raw.remove(A, I), this.unmap(A);
        }
        forEachJointHandleAttachedToRigidBody(A, I) {
          this.raw.forEachJointAttachedToRigidBody(A, I);
        }
        unmap(A) {
          this.map.delete(A);
        }
        len() {
          return this.map.len();
        }
        contains(A) {
          return null != this.get(A);
        }
        get(A) {
          return this.map.get(A);
        }
        forEach(A) {
          this.map.forEach(A);
        }
        getAll() {
          return this.map.getAll();
        }
      };
      let nA = class nA {
        constructor(A, I) {
          (this.rawSet = A), (this.handle = I);
        }
        static newTyped(A, I) {
          switch (A.jointType(I)) {
            case AJ.Revolute:
              return new jA(A, I);
            case AJ.Prismatic:
              return new WA(A, I);
            case AJ.Fixed:
              return new bA(A, I);
            case AJ.Spherical:
              return new xA(A, I);
            default:
              return new nA(A, I);
          }
        }
        isValid() {
          return this.rawSet.contains(this.handle);
        }
        setContactsEnabled(A) {
          this.rawSet.jointSetContactsEnabled(this.handle, A);
        }
        contactsEnabled() {
          return this.rawSet.jointContactsEnabled(this.handle);
        }
      };
      let ZA = class ZA extends nA {};
      let bA = class bA extends nA {};
      let WA = class WA extends ZA {
        rawAxis() {
          return AB.X;
        }
      };
      let jA = class jA extends ZA {
        rawAxis() {
          return AB.AngX;
        }
      };
      let xA = class xA extends nA {};
      let fA = class fA {
        constructor(A) {
          (this.raw = A || new j()),
            (this.map = new YA()),
            A &&
              A.forEachJointHandle((A) => {
                this.map.set(A, nA.newTyped(this.raw, A));
              });
        }
        free() {
          this.raw && this.raw.free(),
            (this.raw = void 0),
            this.map && this.map.clear(),
            (this.map = void 0);
        }
        createJoint(A, I, g, C) {
          let o = A.intoRaw(),
            w = this.raw.createJoint(o, I, g, C);
          o.free();
          let k = nA.newTyped(this.raw, w);
          return this.map.set(w, k), k;
        }
        remove(A, I) {
          this.raw.remove(A, I), this.map.delete(A);
        }
        unmap(A) {
          this.map.delete(A);
        }
        len() {
          return this.map.len();
        }
        contains(A) {
          return null != this.get(A);
        }
        get(A) {
          return this.map.get(A);
        }
        forEach(A) {
          this.map.forEach(A);
        }
        forEachJointHandleAttachedToRigidBody(A, I) {
          this.raw.forEachJointAttachedToRigidBody(A, I);
        }
        getAll() {
          return this.map.getAll();
        }
      };
      ((AD = Ah || (Ah = {}))[(AD.Average = 0)] = "Average"),
        (AD[(AD.Min = 1)] = "Min"),
        (AD[(AD.Multiply = 2)] = "Multiply"),
        (AD[(AD.Max = 3)] = "Max");
      let mA = class mA {
        constructor(A) {
          this.raw = A || new L();
        }
        free() {
          this.raw && this.raw.free(), (this.raw = void 0);
        }
      };
      let XA = class XA {
        constructor(A) {
          this.raw = A || new b();
        }
        free() {
          this.raw && this.raw.free(), (this.raw = void 0);
        }
        forEachActiveRigidBodyHandle(A) {
          this.raw.forEachActiveRigidBodyHandle(A);
        }
      };
      let VA = class VA {
        constructor(A) {
          this.raw = A || new Y();
        }
        free() {
          this.raw && this.raw.free(), (this.raw = void 0);
        }
      };
      let PA = class PA {
        constructor(A) {
          (this.raw = A || new x()), (this.tempManifold = new zA(null));
        }
        free() {
          this.raw && this.raw.free(), (this.raw = void 0);
        }
        contactsWith(A, I) {
          this.raw.contacts_with(A, I);
        }
        intersectionsWith(A, I) {
          this.raw.intersections_with(A, I);
        }
        contactPair(A, I, g) {
          let C = this.raw.contact_pair(A, I);
          if (C) {
            let I;
            let o = C.collider1() != A;
            for (I = 0; I < C.numContactManifolds(); ++I)
              (this.tempManifold.raw = C.contactManifold(I)),
                this.tempManifold.raw && g(this.tempManifold, o),
                this.tempManifold.free();
            C.free();
          }
        }
        intersectionPair(A, I) {
          return this.raw.intersection_pair(A, I);
        }
      };
      let zA = class zA {
        constructor(A) {
          this.raw = A;
        }
        free() {
          this.raw && this.raw.free(), (this.raw = void 0);
        }
        normal() {
          return DA.fromRaw(this.raw.normal());
        }
        localNormal1() {
          return DA.fromRaw(this.raw.local_n1());
        }
        localNormal2() {
          return DA.fromRaw(this.raw.local_n2());
        }
        subshape1() {
          return this.raw.subshape1();
        }
        subshape2() {
          return this.raw.subshape2();
        }
        numContacts() {
          return this.raw.num_contacts();
        }
        localContactPoint1(A) {
          return DA.fromRaw(this.raw.contact_local_p1(A));
        }
        localContactPoint2(A) {
          return DA.fromRaw(this.raw.contact_local_p2(A));
        }
        contactDist(A) {
          return this.raw.contact_dist(A);
        }
        contactFid1(A) {
          return this.raw.contact_fid1(A);
        }
        contactFid2(A) {
          return this.raw.contact_fid2(A);
        }
        contactImpulse(A) {
          return this.raw.contact_impulse(A);
        }
        contactTangentImpulseX(A) {
          return this.raw.contact_tangent_impulse_x(A);
        }
        contactTangentImpulseY(A) {
          return this.raw.contact_tangent_impulse_y(A);
        }
        numSolverContacts() {
          return this.raw.num_solver_contacts();
        }
        solverContactPoint(A) {
          return DA.fromRaw(this.raw.solver_contact_point(A));
        }
        solverContactDist(A) {
          return this.raw.solver_contact_dist(A);
        }
        solverContactFriction(A) {
          return this.raw.solver_contact_friction(A);
        }
        solverContactRestitution(A) {
          return this.raw.solver_contact_restitution(A);
        }
        solverContactTangentVelocity(A) {
          return DA.fromRaw(this.raw.solver_contact_tangent_velocity(A));
        }
      };
      let uA = class uA {
        constructor(A, I, g, C, o) {
          (this.distance = A),
            (this.point1 = I),
            (this.point2 = g),
            (this.normal1 = C),
            (this.normal2 = o);
        }
        static fromRaw(A) {
          if (!A) return null;
          let I = new uA(
            A.distance(),
            DA.fromRaw(A.point1()),
            DA.fromRaw(A.point2()),
            DA.fromRaw(A.normal1()),
            DA.fromRaw(A.normal2()),
          );
          return A.free(), I;
        }
      };
      ((Ao = AN || (AN = {}))[(Ao.Vertex = 0)] = "Vertex"),
        (Ao[(Ao.Edge = 1)] = "Edge"),
        (Ao[(Ao.Face = 2)] = "Face"),
        (Ao[(Ao.Unknown = 3)] = "Unknown");
      let vA = class vA {
        constructor(A, I) {
          (this.point = A), (this.isInside = I);
        }
        static fromRaw(A) {
          if (!A) return null;
          let I = new vA(DA.fromRaw(A.point()), A.isInside());
          return A.free(), I;
        }
      };
      let _A = class _A {
        constructor(A, I, g, C, o) {
          (this.featureType = AN.Unknown),
            (this.featureId = void 0),
            (this.collider = A),
            (this.point = I),
            (this.isInside = g),
            void 0 !== o && (this.featureId = o),
            void 0 !== C && (this.featureType = C);
        }
        static fromRaw(A, I) {
          if (!I) return null;
          let g = new _A(
            A.get(I.colliderHandle()),
            DA.fromRaw(I.point()),
            I.isInside(),
            I.featureType(),
            I.featureId(),
          );
          return I.free(), g;
        }
      };
      let $A = class $A {
        constructor(A, I) {
          (this.origin = A), (this.dir = I);
        }
        pointAt(A) {
          return {
            x: this.origin.x + this.dir.x * A,
            y: this.origin.y + this.dir.y * A,
            z: this.origin.z + this.dir.z * A,
          };
        }
      };
      let AI = class AI {
        constructor(A, I, g, C) {
          (this.featureType = AN.Unknown),
            (this.featureId = void 0),
            (this.toi = A),
            (this.normal = I),
            void 0 !== C && (this.featureId = C),
            void 0 !== g && (this.featureType = g);
        }
        static fromRaw(A) {
          if (!A) return null;
          let I = new AI(
            A.toi(),
            DA.fromRaw(A.normal()),
            A.featureType(),
            A.featureId(),
          );
          return A.free(), I;
        }
      };
      let II = class II {
        constructor(A, I, g, C, o) {
          (this.featureType = AN.Unknown),
            (this.featureId = void 0),
            (this.collider = A),
            (this.toi = I),
            (this.normal = g),
            void 0 !== o && (this.featureId = o),
            void 0 !== C && (this.featureType = C);
        }
        static fromRaw(A, I) {
          if (!I) return null;
          let g = new II(
            A.get(I.colliderHandle()),
            I.toi(),
            DA.fromRaw(I.normal()),
            I.featureType(),
            I.featureId(),
          );
          return I.free(), g;
        }
      };
      let gI = class gI {
        constructor(A, I) {
          (this.collider = A), (this.toi = I);
        }
        static fromRaw(A, I) {
          if (!I) return null;
          let g = new gI(A.get(I.colliderHandle()), I.toi());
          return I.free(), g;
        }
      };
      let CI = class CI {
        constructor(A, I, g, C, o) {
          (this.toi = A),
            (this.witness1 = I),
            (this.witness2 = g),
            (this.normal1 = C),
            (this.normal2 = o);
        }
        static fromRaw(A, I) {
          if (!I) return null;
          let g = new CI(
            I.toi(),
            DA.fromRaw(I.witness1()),
            DA.fromRaw(I.witness2()),
            DA.fromRaw(I.normal1()),
            DA.fromRaw(I.normal2()),
          );
          return I.free(), g;
        }
      };
      let BI = class BI extends CI {
        constructor(A, I, g, C, o, w) {
          super(I, g, C, o, w), (this.collider = A);
        }
        static fromRaw(A, I) {
          if (!I) return null;
          let g = new BI(
            A.get(I.colliderHandle()),
            I.toi(),
            DA.fromRaw(I.witness1()),
            DA.fromRaw(I.witness2()),
            DA.fromRaw(I.normal1()),
            DA.fromRaw(I.normal2()),
          );
          return I.free(), g;
        }
      };
      let QI = class QI {
        static fromRaw(A, I) {
          let g, C, o, w, k, M, y;
          let h = A.coShapeType(I);
          switch (h) {
            case AF.Ball:
              return new EI(A.coRadius(I));
            case AF.Cuboid:
              return (g = A.coHalfExtents(I)), new DI(g.x, g.y, g.z);
            case AF.RoundCuboid:
              return (
                (g = A.coHalfExtents(I)),
                (C = A.coRoundRadius(I)),
                new oI(g.x, g.y, g.z, C)
              );
            case AF.Capsule:
              return (k = A.coHalfHeight(I)), (M = A.coRadius(I)), new GI(k, M);
            case AF.Segment:
              return (
                (o = A.coVertices(I)),
                new wI(DA.new(o[0], o[1], o[2]), DA.new(o[3], o[4], o[5]))
              );
            case AF.Polyline:
              return (o = A.coVertices(I)), (w = A.coIndices(I)), new aI(o, w);
            case AF.Triangle:
              return (
                (o = A.coVertices(I)),
                new kI(
                  DA.new(o[0], o[1], o[2]),
                  DA.new(o[3], o[4], o[5]),
                  DA.new(o[6], o[7], o[8]),
                )
              );
            case AF.RoundTriangle:
              return (
                (o = A.coVertices(I)),
                (C = A.coRoundRadius(I)),
                new SI(
                  DA.new(o[0], o[1], o[2]),
                  DA.new(o[3], o[4], o[5]),
                  DA.new(o[6], o[7], o[8]),
                  C,
                )
              );
            case AF.HalfSpace:
              return (y = DA.fromRaw(A.coHalfspaceNormal(I))), new iI(y);
            case AF.TriMesh:
              return (o = A.coVertices(I)), (w = A.coIndices(I)), new MI(o, w);
            case AF.HeightField:
              let F = A.coHeightfieldScale(I),
                c = A.coHeightfieldHeights(I),
                Ag = A.coHeightfieldNRows(I),
                AC = A.coHeightfieldNCols(I);
              return new JI(Ag, AC, c, F);
            case AF.ConvexPolyhedron:
              return (o = A.coVertices(I)), (w = A.coIndices(I)), new KI(o, w);
            case AF.RoundConvexPolyhedron:
              return (
                (o = A.coVertices(I)),
                (w = A.coIndices(I)),
                (C = A.coRoundRadius(I)),
                new yI(o, w, C)
              );
            case AF.Cylinder:
              return (k = A.coHalfHeight(I)), (M = A.coRadius(I)), new UI(k, M);
            case AF.RoundCylinder:
              return (
                (k = A.coHalfHeight(I)),
                (M = A.coRadius(I)),
                (C = A.coRoundRadius(I)),
                new hI(k, M, C)
              );
            case AF.Cone:
              return (k = A.coHalfHeight(I)), (M = A.coRadius(I)), new NI(k, M);
            case AF.RoundCone:
              return (
                (k = A.coHalfHeight(I)),
                (M = A.coRadius(I)),
                (C = A.coRoundRadius(I)),
                new FI(k, M, C)
              );
            default:
              throw Error("unknown shape type: " + h);
          }
        }
        castShape(A, I, g, C, o, w, k, M, y) {
          let h = DA.intoRaw(A),
            F = GA.intoRaw(I),
            c = DA.intoRaw(g),
            Ag = DA.intoRaw(o),
            AC = GA.intoRaw(w),
            AB = DA.intoRaw(k),
            AQ = this.intoRaw(),
            AE = C.intoRaw(),
            Ai = CI.fromRaw(null, AQ.castShape(h, F, c, AE, Ag, AC, AB, M, y));
          return (
            h.free(),
            F.free(),
            c.free(),
            Ag.free(),
            AC.free(),
            AB.free(),
            AQ.free(),
            AE.free(),
            Ai
          );
        }
        intersectsShape(A, I, g, C, o) {
          let w = DA.intoRaw(A),
            k = GA.intoRaw(I),
            M = DA.intoRaw(C),
            y = GA.intoRaw(o),
            h = this.intoRaw(),
            F = g.intoRaw(),
            c = h.intersectsShape(w, k, F, M, y);
          return w.free(), k.free(), M.free(), y.free(), h.free(), F.free(), c;
        }
        contactShape(A, I, g, C, o, w) {
          let k = DA.intoRaw(A),
            M = GA.intoRaw(I),
            y = DA.intoRaw(C),
            h = GA.intoRaw(o),
            F = this.intoRaw(),
            c = g.intoRaw(),
            Ag = uA.fromRaw(F.contactShape(k, M, c, y, h, w));
          return k.free(), M.free(), y.free(), h.free(), F.free(), c.free(), Ag;
        }
        containsPoint(A, I, g) {
          let C = DA.intoRaw(A),
            o = GA.intoRaw(I),
            w = DA.intoRaw(g),
            k = this.intoRaw(),
            M = k.containsPoint(C, o, w);
          return C.free(), o.free(), w.free(), k.free(), M;
        }
        projectPoint(A, I, g, C) {
          let o = DA.intoRaw(A),
            w = GA.intoRaw(I),
            k = DA.intoRaw(g),
            M = this.intoRaw(),
            y = vA.fromRaw(M.projectPoint(o, w, k, C));
          return o.free(), w.free(), k.free(), M.free(), y;
        }
        intersectsRay(A, I, g, C) {
          let o = DA.intoRaw(I),
            w = GA.intoRaw(g),
            k = DA.intoRaw(A.origin),
            M = DA.intoRaw(A.dir),
            y = this.intoRaw(),
            h = y.intersectsRay(o, w, k, M, C);
          return o.free(), w.free(), k.free(), M.free(), y.free(), h;
        }
        castRay(A, I, g, C, o) {
          let w = DA.intoRaw(I),
            k = GA.intoRaw(g),
            M = DA.intoRaw(A.origin),
            y = DA.intoRaw(A.dir),
            h = this.intoRaw(),
            F = h.castRay(w, k, M, y, C, o);
          return w.free(), k.free(), M.free(), y.free(), h.free(), F;
        }
        castRayAndGetNormal(A, I, g, C, o) {
          let w = DA.intoRaw(I),
            k = GA.intoRaw(g),
            M = DA.intoRaw(A.origin),
            y = DA.intoRaw(A.dir),
            h = this.intoRaw(),
            F = AI.fromRaw(h.castRayAndGetNormal(w, k, M, y, C, o));
          return w.free(), k.free(), M.free(), y.free(), h.free(), F;
        }
      };
      ((AG = AF || (AF = {}))[(AG.Ball = 0)] = "Ball"),
        (AG[(AG.Cuboid = 1)] = "Cuboid"),
        (AG[(AG.Capsule = 2)] = "Capsule"),
        (AG[(AG.Segment = 3)] = "Segment"),
        (AG[(AG.Polyline = 4)] = "Polyline"),
        (AG[(AG.Triangle = 5)] = "Triangle"),
        (AG[(AG.TriMesh = 6)] = "TriMesh"),
        (AG[(AG.HeightField = 7)] = "HeightField"),
        (AG[(AG.ConvexPolyhedron = 9)] = "ConvexPolyhedron"),
        (AG[(AG.Cylinder = 10)] = "Cylinder"),
        (AG[(AG.Cone = 11)] = "Cone"),
        (AG[(AG.RoundCuboid = 12)] = "RoundCuboid"),
        (AG[(AG.RoundTriangle = 13)] = "RoundTriangle"),
        (AG[(AG.RoundCylinder = 14)] = "RoundCylinder"),
        (AG[(AG.RoundCone = 15)] = "RoundCone"),
        (AG[(AG.RoundConvexPolyhedron = 16)] = "RoundConvexPolyhedron"),
        (AG[(AG.HalfSpace = 17)] = "HalfSpace");
      let EI = class EI extends QI {
        constructor(A) {
          super(), (this.type = AF.Ball), (this.radius = A);
        }
        intoRaw() {
          return IA.ball(this.radius);
        }
      };
      let iI = class iI extends QI {
        constructor(A) {
          super(), (this.type = AF.HalfSpace), (this.normal = A);
        }
        intoRaw() {
          let A = DA.intoRaw(this.normal),
            I = IA.halfspace(A);
          return A.free(), I;
        }
      };
      let DI = class DI extends QI {
        constructor(A, I, g) {
          super(),
            (this.type = AF.Cuboid),
            (this.halfExtents = DA.new(A, I, g));
        }
        intoRaw() {
          return IA.cuboid(
            this.halfExtents.x,
            this.halfExtents.y,
            this.halfExtents.z,
          );
        }
      };
      let oI = class oI extends QI {
        constructor(A, I, g, C) {
          super(),
            (this.type = AF.RoundCuboid),
            (this.halfExtents = DA.new(A, I, g)),
            (this.borderRadius = C);
        }
        intoRaw() {
          return IA.roundCuboid(
            this.halfExtents.x,
            this.halfExtents.y,
            this.halfExtents.z,
            this.borderRadius,
          );
        }
      };
      let GI = class GI extends QI {
        constructor(A, I) {
          super(),
            (this.type = AF.Capsule),
            (this.halfHeight = A),
            (this.radius = I);
        }
        intoRaw() {
          return IA.capsule(this.halfHeight, this.radius);
        }
      };
      let wI = class wI extends QI {
        constructor(A, I) {
          super(), (this.type = AF.Segment), (this.a = A), (this.b = I);
        }
        intoRaw() {
          let A = DA.intoRaw(this.a),
            I = DA.intoRaw(this.b),
            g = IA.segment(A, I);
          return A.free(), I.free(), g;
        }
      };
      let kI = class kI extends QI {
        constructor(A, I, g) {
          super(),
            (this.type = AF.Triangle),
            (this.a = A),
            (this.b = I),
            (this.c = g);
        }
        intoRaw() {
          let A = DA.intoRaw(this.a),
            I = DA.intoRaw(this.b),
            g = DA.intoRaw(this.c),
            C = IA.triangle(A, I, g);
          return A.free(), I.free(), g.free(), C;
        }
      };
      let SI = class SI extends QI {
        constructor(A, I, g, C) {
          super(),
            (this.type = AF.RoundTriangle),
            (this.a = A),
            (this.b = I),
            (this.c = g),
            (this.borderRadius = C);
        }
        intoRaw() {
          let A = DA.intoRaw(this.a),
            I = DA.intoRaw(this.b),
            g = DA.intoRaw(this.c),
            C = IA.roundTriangle(A, I, g, this.borderRadius);
          return A.free(), I.free(), g.free(), C;
        }
      };
      let aI = class aI extends QI {
        constructor(A, I) {
          super(),
            (this.type = AF.Polyline),
            (this.vertices = A),
            (this.indices = null != I ? I : new Uint32Array(0));
        }
        intoRaw() {
          return IA.polyline(this.vertices, this.indices);
        }
      };
      let MI = class MI extends QI {
        constructor(A, I) {
          super(),
            (this.type = AF.TriMesh),
            (this.vertices = A),
            (this.indices = I);
        }
        intoRaw() {
          return IA.trimesh(this.vertices, this.indices);
        }
      };
      let KI = class KI extends QI {
        constructor(A, I) {
          super(),
            (this.type = AF.ConvexPolyhedron),
            (this.vertices = A),
            (this.indices = I);
        }
        intoRaw() {
          return this.indices
            ? IA.convexMesh(this.vertices, this.indices)
            : IA.convexHull(this.vertices);
        }
      };
      let yI = class yI extends QI {
        constructor(A, I, g) {
          super(),
            (this.type = AF.RoundConvexPolyhedron),
            (this.vertices = A),
            (this.indices = I),
            (this.borderRadius = g);
        }
        intoRaw() {
          return this.indices
            ? IA.roundConvexMesh(this.vertices, this.indices, this.borderRadius)
            : IA.roundConvexHull(this.vertices, this.borderRadius);
        }
      };
      let JI = class JI extends QI {
        constructor(A, I, g, C) {
          super(),
            (this.type = AF.HeightField),
            (this.nrows = A),
            (this.ncols = I),
            (this.heights = g),
            (this.scale = C);
        }
        intoRaw() {
          let A = DA.intoRaw(this.scale),
            I = IA.heightfield(this.nrows, this.ncols, this.heights, A);
          return A.free(), I;
        }
      };
      let UI = class UI extends QI {
        constructor(A, I) {
          super(),
            (this.type = AF.Cylinder),
            (this.halfHeight = A),
            (this.radius = I);
        }
        intoRaw() {
          return IA.cylinder(this.halfHeight, this.radius);
        }
      };
      let hI = class hI extends QI {
        constructor(A, I, g) {
          super(),
            (this.type = AF.RoundCylinder),
            (this.borderRadius = g),
            (this.halfHeight = A),
            (this.radius = I);
        }
        intoRaw() {
          return IA.roundCylinder(
            this.halfHeight,
            this.radius,
            this.borderRadius,
          );
        }
      };
      let NI = class NI extends QI {
        constructor(A, I) {
          super(),
            (this.type = AF.Cone),
            (this.halfHeight = A),
            (this.radius = I);
        }
        intoRaw() {
          return IA.cone(this.halfHeight, this.radius);
        }
      };
      let FI = class FI extends QI {
        constructor(A, I, g) {
          super(),
            (this.type = AF.RoundCone),
            (this.halfHeight = A),
            (this.radius = I),
            (this.borderRadius = g);
        }
        intoRaw() {
          return IA.roundCone(this.halfHeight, this.radius, this.borderRadius);
        }
      };
      ((Aw = Aq || (Aq = {}))[(Aw.DYNAMIC_DYNAMIC = 1)] = "DYNAMIC_DYNAMIC"),
        (Aw[(Aw.DYNAMIC_KINEMATIC = 12)] = "DYNAMIC_KINEMATIC"),
        (Aw[(Aw.DYNAMIC_FIXED = 2)] = "DYNAMIC_FIXED"),
        (Aw[(Aw.KINEMATIC_KINEMATIC = 52224)] = "KINEMATIC_KINEMATIC"),
        (Aw[(Aw.KINEMATIC_FIXED = 8704)] = "KINEMATIC_FIXED"),
        (Aw[(Aw.FIXED_FIXED = 32)] = "FIXED_FIXED"),
        (Aw[(Aw.DEFAULT = 15)] = "DEFAULT"),
        (Aw[(Aw.ALL = 60943)] = "ALL");
      let qI = class qI {
        constructor(A, I, g, C) {
          (this.colliderSet = A),
            (this.handle = I),
            (this._parent = g),
            (this._shape = C);
        }
        finalizeDeserialization(A) {
          null != this.handle &&
            (this._parent = A.get(this.colliderSet.raw.coParent(this.handle)));
        }
        ensureShapeIsCached() {
          this._shape ||
            (this._shape = QI.fromRaw(this.colliderSet.raw, this.handle));
        }
        get shape() {
          return this.ensureShapeIsCached(), this._shape;
        }
        isValid() {
          return this.colliderSet.raw.contains(this.handle);
        }
        translation() {
          return DA.fromRaw(this.colliderSet.raw.coTranslation(this.handle));
        }
        rotation() {
          return GA.fromRaw(this.colliderSet.raw.coRotation(this.handle));
        }
        isSensor() {
          return this.colliderSet.raw.coIsSensor(this.handle);
        }
        setSensor(A) {
          this.colliderSet.raw.coSetSensor(this.handle, A);
        }
        setShape(A) {
          let I = A.intoRaw();
          this.colliderSet.raw.coSetShape(this.handle, I),
            I.free(),
            (this._shape = A);
        }
        setEnabled(A) {
          this.colliderSet.raw.coSetEnabled(this.handle, A);
        }
        isEnabled() {
          return this.colliderSet.raw.coIsEnabled(this.handle);
        }
        setRestitution(A) {
          this.colliderSet.raw.coSetRestitution(this.handle, A);
        }
        setFriction(A) {
          this.colliderSet.raw.coSetFriction(this.handle, A);
        }
        frictionCombineRule() {
          return this.colliderSet.raw.coFrictionCombineRule(this.handle);
        }
        setFrictionCombineRule(A) {
          this.colliderSet.raw.coSetFrictionCombineRule(this.handle, A);
        }
        restitutionCombineRule() {
          return this.colliderSet.raw.coRestitutionCombineRule(this.handle);
        }
        setRestitutionCombineRule(A) {
          this.colliderSet.raw.coSetRestitutionCombineRule(this.handle, A);
        }
        setCollisionGroups(A) {
          this.colliderSet.raw.coSetCollisionGroups(this.handle, A);
        }
        setSolverGroups(A) {
          this.colliderSet.raw.coSetSolverGroups(this.handle, A);
        }
        activeHooks() {
          return this.colliderSet.raw.coActiveHooks(this.handle);
        }
        setActiveHooks(A) {
          this.colliderSet.raw.coSetActiveHooks(this.handle, A);
        }
        activeEvents() {
          return this.colliderSet.raw.coActiveEvents(this.handle);
        }
        setActiveEvents(A) {
          this.colliderSet.raw.coSetActiveEvents(this.handle, A);
        }
        activeCollisionTypes() {
          return this.colliderSet.raw.coActiveCollisionTypes(this.handle);
        }
        setContactForceEventThreshold(A) {
          return this.colliderSet.raw.coSetContactForceEventThreshold(
            this.handle,
            A,
          );
        }
        contactForceEventThreshold() {
          return this.colliderSet.raw.coContactForceEventThreshold(this.handle);
        }
        setActiveCollisionTypes(A) {
          this.colliderSet.raw.coSetActiveCollisionTypes(this.handle, A);
        }
        setDensity(A) {
          this.colliderSet.raw.coSetDensity(this.handle, A);
        }
        setMass(A) {
          this.colliderSet.raw.coSetMass(this.handle, A);
        }
        setMassProperties(A, I, g, C) {
          let o = DA.intoRaw(I),
            w = DA.intoRaw(g),
            k = GA.intoRaw(C);
          this.colliderSet.raw.coSetMassProperties(this.handle, A, o, w, k),
            o.free(),
            w.free(),
            k.free();
        }
        setTranslation(A) {
          this.colliderSet.raw.coSetTranslation(this.handle, A.x, A.y, A.z);
        }
        setTranslationWrtParent(A) {
          this.colliderSet.raw.coSetTranslationWrtParent(
            this.handle,
            A.x,
            A.y,
            A.z,
          );
        }
        setRotation(A) {
          this.colliderSet.raw.coSetRotation(this.handle, A.x, A.y, A.z, A.w);
        }
        setRotationWrtParent(A) {
          this.colliderSet.raw.coSetRotationWrtParent(
            this.handle,
            A.x,
            A.y,
            A.z,
            A.w,
          );
        }
        shapeType() {
          return this.colliderSet.raw.coShapeType(this.handle);
        }
        halfExtents() {
          return DA.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle));
        }
        setHalfExtents(A) {
          let I = DA.intoRaw(A);
          this.colliderSet.raw.coSetHalfExtents(this.handle, I);
        }
        radius() {
          return this.colliderSet.raw.coRadius(this.handle);
        }
        setRadius(A) {
          this.colliderSet.raw.coSetRadius(this.handle, A);
        }
        roundRadius() {
          return this.colliderSet.raw.coRoundRadius(this.handle);
        }
        setRoundRadius(A) {
          this.colliderSet.raw.coSetRoundRadius(this.handle, A);
        }
        halfHeight() {
          return this.colliderSet.raw.coHalfHeight(this.handle);
        }
        setHalfHeight(A) {
          this.colliderSet.raw.coSetHalfHeight(this.handle, A);
        }
        vertices() {
          return this.colliderSet.raw.coVertices(this.handle);
        }
        indices() {
          return this.colliderSet.raw.coIndices(this.handle);
        }
        heightfieldHeights() {
          return this.colliderSet.raw.coHeightfieldHeights(this.handle);
        }
        heightfieldScale() {
          let A = this.colliderSet.raw.coHeightfieldScale(this.handle);
          return DA.fromRaw(A);
        }
        heightfieldNRows() {
          return this.colliderSet.raw.coHeightfieldNRows(this.handle);
        }
        heightfieldNCols() {
          return this.colliderSet.raw.coHeightfieldNCols(this.handle);
        }
        parent() {
          return this._parent;
        }
        friction() {
          return this.colliderSet.raw.coFriction(this.handle);
        }
        restitution() {
          return this.colliderSet.raw.coRestitution(this.handle);
        }
        density() {
          return this.colliderSet.raw.coDensity(this.handle);
        }
        mass() {
          return this.colliderSet.raw.coMass(this.handle);
        }
        volume() {
          return this.colliderSet.raw.coVolume(this.handle);
        }
        collisionGroups() {
          return this.colliderSet.raw.coCollisionGroups(this.handle);
        }
        solverGroups() {
          return this.colliderSet.raw.coSolverGroups(this.handle);
        }
        containsPoint(A) {
          let I = DA.intoRaw(A),
            g = this.colliderSet.raw.coContainsPoint(this.handle, I);
          return I.free(), g;
        }
        projectPoint(A, I) {
          let g = DA.intoRaw(A),
            C = vA.fromRaw(
              this.colliderSet.raw.coProjectPoint(this.handle, g, I),
            );
          return g.free(), C;
        }
        intersectsRay(A, I) {
          let g = DA.intoRaw(A.origin),
            C = DA.intoRaw(A.dir),
            o = this.colliderSet.raw.coIntersectsRay(this.handle, g, C, I);
          return g.free(), C.free(), o;
        }
        castShape(A, I, g, C, o, w, k) {
          let M = DA.intoRaw(A),
            y = DA.intoRaw(g),
            h = GA.intoRaw(C),
            F = DA.intoRaw(o),
            c = I.intoRaw(),
            Ag = CI.fromRaw(
              this.colliderSet,
              this.colliderSet.raw.coCastShape(
                this.handle,
                M,
                c,
                y,
                h,
                F,
                w,
                k,
              ),
            );
          return M.free(), y.free(), h.free(), F.free(), c.free(), Ag;
        }
        castCollider(A, I, g, C, o) {
          let w = DA.intoRaw(A),
            k = DA.intoRaw(g),
            M = BI.fromRaw(
              this.colliderSet,
              this.colliderSet.raw.coCastCollider(
                this.handle,
                w,
                I.handle,
                k,
                C,
                o,
              ),
            );
          return w.free(), k.free(), M;
        }
        intersectsShape(A, I, g) {
          let C = DA.intoRaw(I),
            o = GA.intoRaw(g),
            w = A.intoRaw(),
            k = this.colliderSet.raw.coIntersectsShape(this.handle, w, C, o);
          return C.free(), o.free(), w.free(), k;
        }
        contactShape(A, I, g, C) {
          let o = DA.intoRaw(I),
            w = GA.intoRaw(g),
            k = A.intoRaw(),
            M = uA.fromRaw(
              this.colliderSet.raw.coContactShape(this.handle, k, o, w, C),
            );
          return o.free(), w.free(), k.free(), M;
        }
        contactCollider(A, I) {
          return uA.fromRaw(
            this.colliderSet.raw.coContactCollider(this.handle, A.handle, I),
          );
        }
        castRay(A, I, g) {
          let C = DA.intoRaw(A.origin),
            o = DA.intoRaw(A.dir),
            w = this.colliderSet.raw.coCastRay(this.handle, C, o, I, g);
          return C.free(), o.free(), w;
        }
        castRayAndGetNormal(A, I, g) {
          let C = DA.intoRaw(A.origin),
            o = DA.intoRaw(A.dir),
            w = AI.fromRaw(
              this.colliderSet.raw.coCastRayAndGetNormal(
                this.handle,
                C,
                o,
                I,
                g,
              ),
            );
          return C.free(), o.free(), w;
        }
      };
      ((Ak = AR || (AR = {}))[(Ak.Density = 0)] = "Density"),
        (Ak[(Ak.Mass = 1)] = "Mass"),
        (Ak[(Ak.MassProps = 2)] = "MassProps");
      let RI = class RI {
        constructor(A) {
          (this.enabled = !0),
            (this.shape = A),
            (this.massPropsMode = AR.Density),
            (this.density = 1),
            (this.friction = 0.5),
            (this.restitution = 0),
            (this.rotation = GA.identity()),
            (this.translation = DA.zeros()),
            (this.isSensor = !1),
            (this.collisionGroups = 4294967295),
            (this.solverGroups = 4294967295),
            (this.frictionCombineRule = Ah.Average),
            (this.restitutionCombineRule = Ah.Average),
            (this.activeCollisionTypes = Aq.DEFAULT),
            (this.activeEvents = 0),
            (this.activeHooks = 0),
            (this.mass = 0),
            (this.centerOfMass = DA.zeros()),
            (this.contactForceEventThreshold = 0),
            (this.principalAngularInertia = DA.zeros()),
            (this.angularInertiaLocalFrame = GA.identity());
        }
        static ball(A) {
          let I = new EI(A);
          return new RI(I);
        }
        static capsule(A, I) {
          let g = new GI(A, I);
          return new RI(g);
        }
        static segment(A, I) {
          let g = new wI(A, I);
          return new RI(g);
        }
        static triangle(A, I, g) {
          let C = new kI(A, I, g);
          return new RI(C);
        }
        static roundTriangle(A, I, g, C) {
          let o = new SI(A, I, g, C);
          return new RI(o);
        }
        static polyline(A, I) {
          let g = new aI(A, I);
          return new RI(g);
        }
        static trimesh(A, I) {
          let g = new MI(A, I);
          return new RI(g);
        }
        static cuboid(A, I, g) {
          let C = new DI(A, I, g);
          return new RI(C);
        }
        static roundCuboid(A, I, g, C) {
          let o = new oI(A, I, g, C);
          return new RI(o);
        }
        static heightfield(A, I, g, C) {
          let o = new JI(A, I, g, C);
          return new RI(o);
        }
        static cylinder(A, I) {
          let g = new UI(A, I);
          return new RI(g);
        }
        static roundCylinder(A, I, g) {
          let C = new hI(A, I, g);
          return new RI(C);
        }
        static cone(A, I) {
          let g = new NI(A, I);
          return new RI(g);
        }
        static roundCone(A, I, g) {
          let C = new FI(A, I, g);
          return new RI(C);
        }
        static convexHull(A) {
          let I = new KI(A, null);
          return new RI(I);
        }
        static convexMesh(A, I) {
          let g = new KI(A, I);
          return new RI(g);
        }
        static roundConvexHull(A, I) {
          let g = new yI(A, null, I);
          return new RI(g);
        }
        static roundConvexMesh(A, I, g) {
          let C = new yI(A, I, g);
          return new RI(C);
        }
        setTranslation(A, I, g) {
          if (
            "number" != typeof A ||
            "number" != typeof I ||
            "number" != typeof g
          )
            throw TypeError("The translation components must be numbers.");
          return (this.translation = { x: A, y: I, z: g }), this;
        }
        setRotation(A) {
          return GA.copy(this.rotation, A), this;
        }
        setSensor(A) {
          return (this.isSensor = A), this;
        }
        setEnabled(A) {
          return (this.enabled = A), this;
        }
        setDensity(A) {
          return (this.massPropsMode = AR.Density), (this.density = A), this;
        }
        setMass(A) {
          return (this.massPropsMode = AR.Mass), (this.mass = A), this;
        }
        setMassProperties(A, I, g, C) {
          return (
            (this.massPropsMode = AR.MassProps),
            (this.mass = A),
            DA.copy(this.centerOfMass, I),
            DA.copy(this.principalAngularInertia, g),
            GA.copy(this.angularInertiaLocalFrame, C),
            this
          );
        }
        setRestitution(A) {
          return (this.restitution = A), this;
        }
        setFriction(A) {
          return (this.friction = A), this;
        }
        setFrictionCombineRule(A) {
          return (this.frictionCombineRule = A), this;
        }
        setRestitutionCombineRule(A) {
          return (this.restitutionCombineRule = A), this;
        }
        setCollisionGroups(A) {
          return (this.collisionGroups = A), this;
        }
        setSolverGroups(A) {
          return (this.solverGroups = A), this;
        }
        setActiveHooks(A) {
          return (this.activeHooks = A), this;
        }
        setActiveEvents(A) {
          return (this.activeEvents = A), this;
        }
        setActiveCollisionTypes(A) {
          return (this.activeCollisionTypes = A), this;
        }
        setContactForceEventThreshold(A) {
          return (this.contactForceEventThreshold = A), this;
        }
      };
      let sI = class sI {
        constructor(A) {
          (this.raw = A || new l()),
            (this.map = new YA()),
            A &&
              A.forEachColliderHandle((A) => {
                this.map.set(A, new qI(this, A, null));
              });
        }
        free() {
          this.raw && this.raw.free(),
            (this.raw = void 0),
            this.map && this.map.clear(),
            (this.map = void 0);
        }
        castClosure(A) {
          return (I) => (A ? A(this.get(I)) : void 0);
        }
        finalizeDeserialization(A) {
          this.map.forEach((I) => I.finalizeDeserialization(A));
        }
        createCollider(A, I, g) {
          let C = null != g && null != g;
          if (C && isNaN(g))
            throw Error(
              "Cannot create a collider with a parent rigid-body handle that is not a number.",
            );
          let o = I.shape.intoRaw(),
            w = DA.intoRaw(I.translation),
            k = GA.intoRaw(I.rotation),
            M = DA.intoRaw(I.centerOfMass),
            y = DA.intoRaw(I.principalAngularInertia),
            h = GA.intoRaw(I.angularInertiaLocalFrame),
            F = this.raw.createCollider(
              I.enabled,
              o,
              w,
              k,
              I.massPropsMode,
              I.mass,
              M,
              y,
              h,
              I.density,
              I.friction,
              I.restitution,
              I.frictionCombineRule,
              I.restitutionCombineRule,
              I.isSensor,
              I.collisionGroups,
              I.solverGroups,
              I.activeCollisionTypes,
              I.activeHooks,
              I.activeEvents,
              I.contactForceEventThreshold,
              C,
              C ? g : 0,
              A.raw,
            );
          o.free(), w.free(), k.free(), M.free(), y.free(), h.free();
          let c = C ? A.get(g) : null,
            Ag = new qI(this, F, c, I.shape);
          return this.map.set(F, Ag), Ag;
        }
        remove(A, I, g, C) {
          this.raw.remove(A, I.raw, g.raw, C), this.unmap(A);
        }
        unmap(A) {
          this.map.delete(A);
        }
        get(A) {
          return this.map.get(A);
        }
        len() {
          return this.map.len();
        }
        contains(A) {
          return null != this.get(A);
        }
        forEach(A) {
          this.map.forEach(A);
        }
        getAll() {
          return this.map.getAll();
        }
      };
      let cI = class cI {
        constructor(A) {
          this.raw = A || new f();
        }
        free() {
          this.raw && this.raw.free(), (this.raw = void 0);
        }
        step(A, I, g, C, o, w, k, M, y, h, F, c) {
          let Ag = DA.intoRaw(A);
          F
            ? this.raw.stepWithEvents(
                Ag,
                I.raw,
                g.raw,
                C.raw,
                o.raw,
                w.raw,
                k.raw,
                M.raw,
                y.raw,
                h.raw,
                F.raw,
                c,
                c ? c.filterContactPair : null,
                c ? c.filterIntersectionPair : null,
              )
            : this.raw.step(
                Ag,
                I.raw,
                g.raw,
                C.raw,
                o.raw,
                w.raw,
                k.raw,
                M.raw,
                y.raw,
                h.raw,
              ),
            Ag.free();
        }
      };
      ((AS = As || (As = {}))[(AS.EXCLUDE_FIXED = 1)] = "EXCLUDE_FIXED"),
        (AS[(AS.EXCLUDE_KINEMATIC = 2)] = "EXCLUDE_KINEMATIC"),
        (AS[(AS.EXCLUDE_DYNAMIC = 4)] = "EXCLUDE_DYNAMIC"),
        (AS[(AS.EXCLUDE_SENSORS = 8)] = "EXCLUDE_SENSORS"),
        (AS[(AS.EXCLUDE_SOLIDS = 16)] = "EXCLUDE_SOLIDS"),
        (AS[(AS.ONLY_DYNAMIC = 3)] = "ONLY_DYNAMIC"),
        (AS[(AS.ONLY_KINEMATIC = 5)] = "ONLY_KINEMATIC"),
        (AS[(AS.ONLY_FIXED = 6)] = "ONLY_FIXED");
      let YI = class YI {
        constructor(A) {
          this.raw = A || new V();
        }
        free() {
          this.raw && this.raw.free(), (this.raw = void 0);
        }
        update(A, I) {
          this.raw.update(A.raw, I.raw);
        }
        castRay(A, I, g, C, o, w, k, M, y, h) {
          let F = DA.intoRaw(g.origin),
            c = DA.intoRaw(g.dir),
            Ag = gI.fromRaw(
              I,
              this.raw.castRay(A.raw, I.raw, F, c, C, o, w, k, M, y, h),
            );
          return F.free(), c.free(), Ag;
        }
        castRayAndGetNormal(A, I, g, C, o, w, k, M, y, h) {
          let F = DA.intoRaw(g.origin),
            c = DA.intoRaw(g.dir),
            Ag = II.fromRaw(
              I,
              this.raw.castRayAndGetNormal(
                A.raw,
                I.raw,
                F,
                c,
                C,
                o,
                w,
                k,
                M,
                y,
                h,
              ),
            );
          return F.free(), c.free(), Ag;
        }
        intersectionsWithRay(A, I, g, C, o, w, k, M, y, h, F) {
          let c = DA.intoRaw(g.origin),
            Ag = DA.intoRaw(g.dir);
          this.raw.intersectionsWithRay(
            A.raw,
            I.raw,
            c,
            Ag,
            C,
            o,
            (A) => w(II.fromRaw(I, A)),
            k,
            M,
            y,
            h,
            F,
          ),
            c.free(),
            Ag.free();
        }
        intersectionWithShape(A, I, g, C, o, w, k, M, y, h) {
          let F = DA.intoRaw(g),
            c = GA.intoRaw(C),
            Ag = o.intoRaw(),
            AC = this.raw.intersectionWithShape(
              A.raw,
              I.raw,
              F,
              c,
              Ag,
              w,
              k,
              M,
              y,
              h,
            );
          return F.free(), c.free(), Ag.free(), AC;
        }
        projectPoint(A, I, g, C, o, w, k, M, y) {
          let h = DA.intoRaw(g),
            F = _A.fromRaw(
              I,
              this.raw.projectPoint(A.raw, I.raw, h, C, o, w, k, M, y),
            );
          return h.free(), F;
        }
        projectPointAndGetFeature(A, I, g, C, o, w, k, M) {
          let y = DA.intoRaw(g),
            h = _A.fromRaw(
              I,
              this.raw.projectPointAndGetFeature(
                A.raw,
                I.raw,
                y,
                C,
                o,
                w,
                k,
                M,
              ),
            );
          return y.free(), h;
        }
        intersectionsWithPoint(A, I, g, C, o, w, k, M, y) {
          let h = DA.intoRaw(g);
          this.raw.intersectionsWithPoint(A.raw, I.raw, h, C, o, w, k, M, y),
            h.free();
        }
        castShape(A, I, g, C, o, w, k, M, y, h, F, c, Ag) {
          let AC = DA.intoRaw(g),
            AB = GA.intoRaw(C),
            AQ = DA.intoRaw(o),
            AE = w.intoRaw(),
            Ai = BI.fromRaw(
              I,
              this.raw.castShape(
                A.raw,
                I.raw,
                AC,
                AB,
                AQ,
                AE,
                k,
                M,
                y,
                h,
                F,
                c,
                Ag,
              ),
            );
          return AC.free(), AB.free(), AQ.free(), AE.free(), Ai;
        }
        intersectionsWithShape(A, I, g, C, o, w, k, M, y, h, F) {
          let c = DA.intoRaw(g),
            Ag = GA.intoRaw(C),
            AC = o.intoRaw();
          this.raw.intersectionsWithShape(
            A.raw,
            I.raw,
            c,
            Ag,
            AC,
            w,
            k,
            M,
            y,
            h,
            F,
          ),
            c.free(),
            Ag.free(),
            AC.free();
        }
        collidersWithAabbIntersectingAabb(A, I, g) {
          let C = DA.intoRaw(A),
            o = DA.intoRaw(I);
          this.raw.collidersWithAabbIntersectingAabb(C, o, g),
            C.free(),
            o.free();
        }
      };
      let LI = class LI {
        constructor(A) {
          this.raw = A || new AA();
        }
        free() {
          this.raw && this.raw.free(), (this.raw = void 0);
        }
        serializeAll(A, I, g, C, o, w, k, M, y) {
          let h = DA.intoRaw(A),
            F = this.raw.serializeAll(
              h,
              I.raw,
              g.raw,
              C.raw,
              o.raw,
              w.raw,
              k.raw,
              M.raw,
              y.raw,
            );
          return h.free(), F;
        }
        deserializeAll(A) {
          return eI.fromRaw(this.raw.deserializeAll(A));
        }
      };
      let HI = class HI {
        constructor(A, I) {
          (this.vertices = A), (this.colors = I);
        }
      };
      let lI = class lI {
        constructor(A) {
          this.raw = A || new r();
        }
        free() {
          this.raw && this.raw.free(),
            (this.raw = void 0),
            (this.vertices = void 0),
            (this.colors = void 0);
        }
        render(A, I, g, C, o) {
          this.raw.render(A.raw, I.raw, g.raw, C.raw, o.raw),
            (this.vertices = this.raw.vertices()),
            (this.colors = this.raw.colors());
        }
      };
      let tI = class tI {};
      let pI = class pI {
        constructor(A, I, g, C, o) {
          (this.params = I),
            (this.bodies = g),
            (this.colliders = C),
            (this.queries = o),
            (this.raw = new W(A)),
            (this.rawCharacterCollision = new H()),
            (this._applyImpulsesToDynamicBodies = !1),
            (this._characterMass = null);
        }
        free() {
          this.raw && (this.raw.free(), this.rawCharacterCollision.free()),
            (this.raw = void 0),
            (this.rawCharacterCollision = void 0);
        }
        up() {
          return this.raw.up();
        }
        setUp(A) {
          let I = DA.intoRaw(A);
          return this.raw.setUp(I);
        }
        applyImpulsesToDynamicBodies() {
          return this._applyImpulsesToDynamicBodies;
        }
        setApplyImpulsesToDynamicBodies(A) {
          this._applyImpulsesToDynamicBodies = A;
        }
        characterMass() {
          return this._characterMass;
        }
        setCharacterMass(A) {
          this._characterMass = A;
        }
        offset() {
          return this.raw.offset();
        }
        setOffset(A) {
          this.raw.setOffset(A);
        }
        slideEnabled() {
          return this.raw.slideEnabled();
        }
        setSlideEnabled(A) {
          this.raw.setSlideEnabled(A);
        }
        autostepMaxHeight() {
          return this.raw.autostepMaxHeight();
        }
        autostepMinWidth() {
          return this.raw.autostepMinWidth();
        }
        autostepIncludesDynamicBodies() {
          return this.raw.autostepIncludesDynamicBodies();
        }
        autostepEnabled() {
          return this.raw.autostepEnabled();
        }
        enableAutostep(A, I, g) {
          this.raw.enableAutostep(A, I, g);
        }
        disableAutostep() {
          return this.raw.disableAutostep();
        }
        maxSlopeClimbAngle() {
          return this.raw.maxSlopeClimbAngle();
        }
        setMaxSlopeClimbAngle(A) {
          this.raw.setMaxSlopeClimbAngle(A);
        }
        minSlopeSlideAngle() {
          return this.raw.minSlopeSlideAngle();
        }
        setMinSlopeSlideAngle(A) {
          this.raw.setMinSlopeSlideAngle(A);
        }
        snapToGroundDistance() {
          return this.raw.snapToGroundDistance();
        }
        enableSnapToGround(A) {
          this.raw.enableSnapToGround(A);
        }
        disableSnapToGround() {
          this.raw.disableSnapToGround();
        }
        snapToGroundEnabled() {
          return this.raw.snapToGroundEnabled();
        }
        computeColliderMovement(A, I, g, C, o) {
          let w = DA.intoRaw(I);
          this.raw.computeColliderMovement(
            this.params.dt,
            this.bodies.raw,
            this.colliders.raw,
            this.queries.raw,
            A.handle,
            w,
            this._applyImpulsesToDynamicBodies,
            this._characterMass,
            g,
            C,
            this.colliders.castClosure(o),
          ),
            w.free();
        }
        computedMovement() {
          return DA.fromRaw(this.raw.computedMovement());
        }
        computedGrounded() {
          return this.raw.computedGrounded();
        }
        numComputedCollisions() {
          return this.raw.numComputedCollisions();
        }
        computedCollision(A, I) {
          if (this.raw.computedCollision(A, this.rawCharacterCollision)) {
            let A = this.rawCharacterCollision;
            return (
              ((I = null != I ? I : new tI()).translationApplied = DA.fromRaw(
                A.translationApplied(),
              )),
              (I.translationRemaining = DA.fromRaw(A.translationRemaining())),
              (I.toi = A.toi()),
              (I.witness1 = DA.fromRaw(A.worldWitness1())),
              (I.witness2 = DA.fromRaw(A.worldWitness2())),
              (I.normal1 = DA.fromRaw(A.worldNormal1())),
              (I.normal2 = DA.fromRaw(A.worldNormal2())),
              (I.collider = this.colliders.get(A.handle())),
              I
            );
          }
          return null;
        }
      };
      let eI = class eI {
        constructor(A, I, g, C, o, w, k, M, y, h, F, c, Ag, AC) {
          (this.gravity = A),
            (this.integrationParameters = new HA(I)),
            (this.islands = new XA(g)),
            (this.broadPhase = new VA(C)),
            (this.narrowPhase = new PA(o)),
            (this.bodies = new LA(w)),
            (this.colliders = new sI(k)),
            (this.impulseJoints = new OA(M)),
            (this.multibodyJoints = new fA(y)),
            (this.ccdSolver = new mA(h)),
            (this.queryPipeline = new YI(F)),
            (this.physicsPipeline = new cI(c)),
            (this.serializationPipeline = new LI(Ag)),
            (this.debugRenderPipeline = new lI(AC)),
            (this.characterControllers = new Set()),
            this.impulseJoints.finalizeDeserialization(this.bodies),
            this.bodies.finalizeDeserialization(this.colliders),
            this.colliders.finalizeDeserialization(this.bodies);
        }
        free() {
          this.integrationParameters.free(),
            this.islands.free(),
            this.broadPhase.free(),
            this.narrowPhase.free(),
            this.bodies.free(),
            this.colliders.free(),
            this.impulseJoints.free(),
            this.multibodyJoints.free(),
            this.ccdSolver.free(),
            this.queryPipeline.free(),
            this.physicsPipeline.free(),
            this.serializationPipeline.free(),
            this.debugRenderPipeline.free(),
            this.characterControllers.forEach((A) => A.free()),
            (this.integrationParameters = void 0),
            (this.islands = void 0),
            (this.broadPhase = void 0),
            (this.narrowPhase = void 0),
            (this.bodies = void 0),
            (this.colliders = void 0),
            (this.ccdSolver = void 0),
            (this.impulseJoints = void 0),
            (this.multibodyJoints = void 0),
            (this.queryPipeline = void 0),
            (this.physicsPipeline = void 0),
            (this.serializationPipeline = void 0),
            (this.debugRenderPipeline = void 0),
            (this.characterControllers = void 0);
        }
        static fromRaw(A) {
          return A
            ? new eI(
                DA.fromRaw(A.takeGravity()),
                A.takeIntegrationParameters(),
                A.takeIslandManager(),
                A.takeBroadPhase(),
                A.takeNarrowPhase(),
                A.takeBodies(),
                A.takeColliders(),
                A.takeImpulseJoints(),
                A.takeMultibodyJoints(),
              )
            : null;
        }
        takeSnapshot() {
          return this.serializationPipeline.serializeAll(
            this.gravity,
            this.integrationParameters,
            this.islands,
            this.broadPhase,
            this.narrowPhase,
            this.bodies,
            this.colliders,
            this.impulseJoints,
            this.multibodyJoints,
          );
        }
        static restoreSnapshot(A) {
          return new LI().deserializeAll(A);
        }
        debugRender() {
          return (
            this.debugRenderPipeline.render(
              this.bodies,
              this.colliders,
              this.impulseJoints,
              this.multibodyJoints,
              this.narrowPhase,
            ),
            new HI(
              this.debugRenderPipeline.vertices,
              this.debugRenderPipeline.colors,
            )
          );
        }
        step(A, I) {
          this.physicsPipeline.step(
            this.gravity,
            this.integrationParameters,
            this.islands,
            this.broadPhase,
            this.narrowPhase,
            this.bodies,
            this.colliders,
            this.impulseJoints,
            this.multibodyJoints,
            this.ccdSolver,
            A,
            I,
          ),
            this.queryPipeline.update(this.bodies, this.colliders);
        }
        propagateModifiedBodyPositionsToColliders() {
          this.bodies.raw.propagateModifiedBodyPositionsToColliders(
            this.colliders.raw,
          );
        }
        updateSceneQueries() {
          this.propagateModifiedBodyPositionsToColliders(),
            this.queryPipeline.update(this.bodies, this.colliders);
        }
        get timestep() {
          return this.integrationParameters.dt;
        }
        set timestep(A) {
          this.integrationParameters.dt = A;
        }
        get maxVelocityIterations() {
          return this.integrationParameters.maxVelocityIterations;
        }
        set maxVelocityIterations(A) {
          this.integrationParameters.maxVelocityIterations = A;
        }
        get maxVelocityFrictionIterations() {
          return this.integrationParameters.maxVelocityFrictionIterations;
        }
        set maxVelocityFrictionIterations(A) {
          this.integrationParameters.maxVelocityFrictionIterations = A;
        }
        get maxStabilizationIterations() {
          return this.integrationParameters.maxStabilizationIterations;
        }
        set maxStabilizationIterations(A) {
          this.integrationParameters.maxStabilizationIterations = A;
        }
        createRigidBody(A) {
          return this.bodies.createRigidBody(this.colliders, A);
        }
        createCharacterController(A) {
          let I = new pI(
            A,
            this.integrationParameters,
            this.bodies,
            this.colliders,
            this.queryPipeline,
          );
          return this.characterControllers.add(I), I;
        }
        removeCharacterController(A) {
          this.characterControllers.delete(A), A.free();
        }
        createCollider(A, I) {
          let g = I ? I.handle : void 0;
          return this.colliders.createCollider(this.bodies, A, g);
        }
        createImpulseJoint(A, I, g, C) {
          return this.impulseJoints.createJoint(
            this.bodies,
            A,
            I.handle,
            g.handle,
            C,
          );
        }
        createMultibodyJoint(A, I, g, C) {
          return this.multibodyJoints.createJoint(A, I.handle, g.handle, C);
        }
        getRigidBody(A) {
          return this.bodies.get(A);
        }
        getCollider(A) {
          return this.colliders.get(A);
        }
        getImpulseJoint(A) {
          return this.impulseJoints.get(A);
        }
        getMultibodyJoint(A) {
          return this.multibodyJoints.get(A);
        }
        removeRigidBody(A) {
          this.bodies &&
            this.bodies.remove(
              A.handle,
              this.islands,
              this.colliders,
              this.impulseJoints,
              this.multibodyJoints,
            );
        }
        removeCollider(A, I) {
          this.colliders &&
            this.colliders.remove(A.handle, this.islands, this.bodies, I);
        }
        removeImpulseJoint(A, I) {
          this.impulseJoints && this.impulseJoints.remove(A.handle, I);
        }
        removeMultibodyJoint(A, I) {
          this.impulseJoints && this.multibodyJoints.remove(A.handle, I);
        }
        forEachCollider(A) {
          this.colliders.forEach(A);
        }
        forEachRigidBody(A) {
          this.bodies.forEach(A);
        }
        forEachActiveRigidBody(A) {
          this.bodies.forEachActiveRigidBody(this.islands, A);
        }
        castRay(A, I, g, C, o, w, k, M) {
          return this.queryPipeline.castRay(
            this.bodies,
            this.colliders,
            A,
            I,
            g,
            C,
            o,
            w ? w.handle : null,
            k ? k.handle : null,
            this.colliders.castClosure(M),
          );
        }
        castRayAndGetNormal(A, I, g, C, o, w, k, M) {
          return this.queryPipeline.castRayAndGetNormal(
            this.bodies,
            this.colliders,
            A,
            I,
            g,
            C,
            o,
            w ? w.handle : null,
            k ? k.handle : null,
            this.colliders.castClosure(M),
          );
        }
        intersectionsWithRay(A, I, g, C, o, w, k, M, y) {
          this.queryPipeline.intersectionsWithRay(
            this.bodies,
            this.colliders,
            A,
            I,
            g,
            C,
            o,
            w,
            k ? k.handle : null,
            M ? M.handle : null,
            this.colliders.castClosure(y),
          );
        }
        intersectionWithShape(A, I, g, C, o, w, k, M) {
          let y = this.queryPipeline.intersectionWithShape(
            this.bodies,
            this.colliders,
            A,
            I,
            g,
            C,
            o,
            w ? w.handle : null,
            k ? k.handle : null,
            this.colliders.castClosure(M),
          );
          return null != y ? this.colliders.get(y) : null;
        }
        projectPoint(A, I, g, C, o, w, k) {
          return this.queryPipeline.projectPoint(
            this.bodies,
            this.colliders,
            A,
            I,
            g,
            C,
            o ? o.handle : null,
            w ? w.handle : null,
            this.colliders.castClosure(k),
          );
        }
        projectPointAndGetFeature(A, I, g, C, o, w) {
          return this.queryPipeline.projectPointAndGetFeature(
            this.bodies,
            this.colliders,
            A,
            I,
            g,
            C ? C.handle : null,
            o ? o.handle : null,
            this.colliders.castClosure(w),
          );
        }
        intersectionsWithPoint(A, I, g, C, o, w, k) {
          this.queryPipeline.intersectionsWithPoint(
            this.bodies,
            this.colliders,
            A,
            this.colliders.castClosure(I),
            g,
            C,
            o ? o.handle : null,
            w ? w.handle : null,
            this.colliders.castClosure(k),
          );
        }
        castShape(A, I, g, C, o, w, k, M, y, h, F) {
          return this.queryPipeline.castShape(
            this.bodies,
            this.colliders,
            A,
            I,
            g,
            C,
            o,
            w,
            k,
            M,
            y ? y.handle : null,
            h ? h.handle : null,
            this.colliders.castClosure(F),
          );
        }
        intersectionsWithShape(A, I, g, C, o, w, k, M, y) {
          this.queryPipeline.intersectionsWithShape(
            this.bodies,
            this.colliders,
            A,
            I,
            g,
            this.colliders.castClosure(C),
            o,
            w,
            k ? k.handle : null,
            M ? M.handle : null,
            this.colliders.castClosure(y),
          );
        }
        collidersWithAabbIntersectingAabb(A, I, g) {
          this.queryPipeline.collidersWithAabbIntersectingAabb(
            A,
            I,
            this.colliders.castClosure(g),
          );
        }
        contactsWith(A, I) {
          this.narrowPhase.contactsWith(
            A.handle,
            this.colliders.castClosure(I),
          );
        }
        intersectionsWith(A, I) {
          this.narrowPhase.intersectionsWith(
            A.handle,
            this.colliders.castClosure(I),
          );
        }
        contactPair(A, I, g) {
          this.narrowPhase.contactPair(A.handle, I.handle, g);
        }
        intersectionPair(A, I) {
          return this.narrowPhase.intersectionPair(A.handle, I.handle);
        }
      };
      ((Aa = Ac || (Ac = {}))[(Aa.COLLISION_EVENTS = 1)] = "COLLISION_EVENTS"),
        (Aa[(Aa.CONTACT_FORCE_EVENTS = 2)] = "CONTACT_FORCE_EVENTS");
      let rI = class rI {
        free() {
          this.raw && this.raw.free(), (this.raw = void 0);
        }
        collider1() {
          return this.raw.collider1();
        }
        collider2() {
          return this.raw.collider2();
        }
        totalForce() {
          return DA.fromRaw(this.raw.total_force());
        }
        totalForceMagnitude() {
          return this.raw.total_force_magnitude();
        }
        maxForceDirection() {
          return DA.fromRaw(this.raw.max_force_direction());
        }
        maxForceMagnitude() {
          return this.raw.max_force_magnitude();
        }
      };
      let dI = class dI {
        constructor(A, I) {
          this.raw = I || new T(A);
        }
        free() {
          this.raw && this.raw.free(), (this.raw = void 0);
        }
        drainCollisionEvents(A) {
          this.raw.drainCollisionEvents(A);
        }
        drainContactForceEvents(A) {
          let I = new rI();
          this.raw.drainContactForceEvents((g) => {
            (I.raw = g), A(I), I.free();
          });
        }
        clear() {
          this.raw.clear();
        }
      };
      ((AM = AY || (AY = {}))[(AM.FILTER_CONTACT_PAIRS = 1)] =
        "FILTER_CONTACT_PAIRS"),
        (AM[(AM.FILTER_INTERSECTION_PAIRS = 2)] = "FILTER_INTERSECTION_PAIRS"),
        ((AK = AL || (AL = {}))[(AK.EMPTY = 0)] = "EMPTY"),
        (AK[(AK.COMPUTE_IMPULSE = 1)] = "COMPUTE_IMPULSE");
      for (
        var AQ,
          AE,
          Ai,
          AD,
          Ao,
          AG,
          Aw,
          Ak,
          AS,
          Aa,
          AM,
          AK,
          Ay,
          AJ,
          AU,
          Ah,
          AN,
          AF,
          Aq,
          AR,
          As,
          Ac,
          AY,
          AL,
          AH = {
            byteLength: function (A) {
              var I = fI(A),
                g = I[0],
                C = I[1];
              return (3 * (g + C)) / 4 - C;
            },
            toByteArray: function (A) {
              var I,
                g,
                C = fI(A),
                o = C[0],
                w = C[1],
                k = new Ap((3 * (o + w)) / 4 - w),
                M = 0,
                y = w > 0 ? o - 4 : o;
              for (g = 0; g < y; g += 4)
                (I =
                  (At[A.charCodeAt(g)] << 18) |
                  (At[A.charCodeAt(g + 1)] << 12) |
                  (At[A.charCodeAt(g + 2)] << 6) |
                  At[A.charCodeAt(g + 3)]),
                  (k[M++] = (I >> 16) & 255),
                  (k[M++] = (I >> 8) & 255),
                  (k[M++] = 255 & I);
              return (
                2 === w &&
                  ((I =
                    (At[A.charCodeAt(g)] << 2) |
                    (At[A.charCodeAt(g + 1)] >> 4)),
                  (k[M++] = 255 & I)),
                1 === w &&
                  ((I =
                    (At[A.charCodeAt(g)] << 10) |
                    (At[A.charCodeAt(g + 1)] << 4) |
                    (At[A.charCodeAt(g + 2)] >> 2)),
                  (k[M++] = (I >> 8) & 255),
                  (k[M++] = 255 & I)),
                k
              );
            },
            fromByteArray: function (A) {
              for (
                var I, g = A.length, C = g % 3, o = [], w = 0, k = g - C;
                w < k;
                w += 16383
              )
                o.push(
                  (function (A, I, g) {
                    for (var C, o = [], w = I; w < g; w += 3)
                      o.push(
                        Al[
                          ((C =
                            ((A[w] << 16) & 16711680) +
                            ((A[w + 1] << 8) & 65280) +
                            (255 & A[w + 2])) >>
                            18) &
                            63
                        ] +
                          Al[(C >> 12) & 63] +
                          Al[(C >> 6) & 63] +
                          Al[63 & C],
                      );
                    return o.join("");
                  })(A, w, w + 16383 > k ? k : w + 16383),
                );
              return (
                1 === C
                  ? o.push(Al[(I = A[g - 1]) >> 2] + Al[(I << 4) & 63] + "==")
                  : 2 === C &&
                    o.push(
                      Al[(I = (A[g - 2] << 8) + A[g - 1]) >> 10] +
                        Al[(I >> 4) & 63] +
                        Al[(I << 2) & 63] +
                        "=",
                    ),
                o.join("")
              );
            },
          },
          Al = [],
          At = [],
          Ap = "undefined" != typeof Uint8Array ? Uint8Array : Array,
          Ae =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          Ar = 0,
          Ad = Ae.length;
        Ar < Ad;
        ++Ar
      )
        (Al[Ar] = Ae[Ar]), (At[Ae.charCodeAt(Ar)] = Ar);
      function fI(A) {
        var I = A.length;
        if (I % 4 > 0)
          throw Error("Invalid string. Length must be a multiple of 4");
        var g = A.indexOf("=");
        return -1 === g && (g = I), [g, g === I ? 0 : 4 - (g % 4)];
      }
      function XI() {
        var A, I, g, C;
        return (
          (A = this),
          (I = void 0),
          (g = void 0),
          (C = function* () {
            yield EA(
              AH.toByteArray(
              ).buffer,
            );
          }),
          new (g || (g = Promise))(function (o, w) {
            function E(A) {
              try {
                D(C.next(A));
              } catch (A) {
                w(A);
              }
            }
            function i(A) {
              try {
                D(C.throw(A));
              } catch (A) {
                w(A);
              }
            }
            function D(A) {
              var I;
              A.done
                ? o(A.value)
                : ((I = A.value) instanceof g
                    ? I
                    : new g(function (A) {
                        A(I);
                      })
                  ).then(E, i);
            }
            D((C = C.apply(A, I || [])).next());
          })
        );
      }
      function VI() {
        return (function () {
          try {
            let g = C.__wbindgen_add_to_stack_pointer(-16);
            C.version(g);
            var A = G()[g / 4 + 0],
              I = G()[g / 4 + 1];
            return S(A, I);
          } finally {
            C.__wbindgen_add_to_stack_pointer(16), C.__wbindgen_free(A, I);
          }
        })();
      }
      (At["-".charCodeAt(0)] = 62), (At["_".charCodeAt(0)] = 63);
      var AT = Object.freeze({
        __proto__: null,
        version: VI,
        Vector3: iA,
        VectorOps: DA,
        Quaternion: oA,
        RotationOps: GA,
        SdpMatrix3: wA,
        SdpMatrix3Ops: kA,
        get RigidBodyType() {
          return Ay;
        },
        RigidBody: sA,
        RigidBodyDesc: cA,
        RigidBodySet: LA,
        IntegrationParameters: HA,
        get JointType() {
          return AJ;
        },
        get MotorModel() {
          return AU;
        },
        ImpulseJoint: lA,
        UnitImpulseJoint: tA,
        FixedImpulseJoint: pA,
        PrismaticImpulseJoint: eA,
        RevoluteImpulseJoint: rA,
        SphericalImpulseJoint: dA,
        JointData: TA,
        ImpulseJointSet: OA,
        MultibodyJoint: nA,
        UnitMultibodyJoint: ZA,
        FixedMultibodyJoint: bA,
        PrismaticMultibodyJoint: WA,
        RevoluteMultibodyJoint: jA,
        SphericalMultibodyJoint: xA,
        MultibodyJointSet: fA,
        get CoefficientCombineRule() {
          return Ah;
        },
        CCDSolver: mA,
        IslandManager: XA,
        BroadPhase: VA,
        NarrowPhase: PA,
        TempContactManifold: zA,
        Shape: QI,
        get ShapeType() {
          return AF;
        },
        Ball: EI,
        HalfSpace: iI,
        Cuboid: DI,
        RoundCuboid: oI,
        Capsule: GI,
        Segment: wI,
        Triangle: kI,
        RoundTriangle: SI,
        Polyline: aI,
        TriMesh: MI,
        ConvexPolyhedron: KI,
        RoundConvexPolyhedron: yI,
        Heightfield: JI,
        Cylinder: UI,
        RoundCylinder: hI,
        Cone: NI,
        RoundCone: FI,
        get ActiveCollisionTypes() {
          return Aq;
        },
        Collider: qI,
        get MassPropsMode() {
          return AR;
        },
        ColliderDesc: RI,
        ColliderSet: sI,
        get FeatureType() {
          return AN;
        },
        Ray: $A,
        RayIntersection: AI,
        RayColliderIntersection: II,
        RayColliderToi: gI,
        PointProjection: vA,
        PointColliderProjection: _A,
        ShapeTOI: CI,
        ShapeColliderTOI: BI,
        ShapeContact: uA,
        World: eI,
        PhysicsPipeline: cI,
        SerializationPipeline: LI,
        get ActiveEvents() {
          return Ac;
        },
        TempContactForceEvent: rI,
        EventQueue: dI,
        get ActiveHooks() {
          return AY;
        },
        get SolverFlags() {
          return AL;
        },
        DebugRenderBuffers: HI,
        DebugRenderPipeline: lI,
        get QueryFilterFlags() {
          return As;
        },
        QueryPipeline: YI,
        init: XI,
        CharacterCollision: tI,
        KinematicCharacterController: pI,
      });
    },
  },
]);