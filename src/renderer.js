// Copyright 2011 Robert Scott Dionne. All rights reserved.

/**
 * @fileoverview
 * @author robertsdionne@gmail.com (Robert Scott Dionne)
 */

/**
 * A WebGL renderer.
 * @interface
 */
webgl.Renderer = function() {};


  /**
   * Handles changes in WebGL canvas size.
   * @param {WebGLRenderingContext} gl The WebGL rendering context.
   * @param {number} width The new canvas width.
   * @param {number} height Thew new canvas height.
   */
 webgl.Renderer.prototype.onChange = discoball.abstractMethod;


  /**
   * Handles WebGL context creation.
   * @param {WebGLRenderingContext} gl The WebGL rendering context.
   */
 webgl.Renderer.prototype.onCreate = discoball.abstractMethod;


  /**
   * Handles WebGL context destruction.
   * @param {WebGLRenderingContext} gl The WebGL rendering context.
   */
 webgl.Renderer.prototype.onDestroy = discoball.abstractMethod;



  /**
   * Handles WebGL drawing.
   * @param {WebGLRenderingContext} gl The WebGL rendering context.
   */
 webgl.Renderer.prototype.onDraw = discoball.abstractMethod;
