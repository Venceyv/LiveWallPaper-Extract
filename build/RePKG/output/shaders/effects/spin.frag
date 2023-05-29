
// [COMBO] {"material":"ui_editor_properties_repeat","combo":"REPEAT","type":"options","default":1}

varying vec4 v_TexCoord;
varying vec2 v_TexCoordMask;

uniform sampler2D g_Texture0; // {"hidden":true}
uniform sampler2D g_Texture1; // {"label":"ui_editor_properties_opacity_mask","mode":"opacitymask","combo":"MASK","paintdefaultcolor":"0 0 0 1"}

void main() {
	vec2 texCoord = v_TexCoord.xy;
#if REPEAT
	texCoord = frac(texCoord);
#endif
	gl_FragColor = texSample2D(g_Texture0, texCoord);
	
#if MASK
	float mask = texSample2D(g_Texture1, v_TexCoordMask).r;
	gl_FragColor = mix(texSample2D(g_Texture0, v_TexCoord.zw), gl_FragColor, mask);
#endif
}
